import { Document, Page } from '@react-pdf/renderer';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function CustomerAccount() {
    const {CustomerName, CustomerId } = useParams();
    const [data, setData] = useState({url:""});
    const customer_id = new FormData();
    customer_id.append( "customer_id", CustomerId );
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    

    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages);
        setPageNumber(1);
      }
      function changePage(offSet){
        setPageNumber(prevPageNumber => prevPageNumber + offSet);
      }
    
      function changePageBack(){
        changePage(-1)
      }
    
      function changePageNext(){
        changePage(+1)
      }
        
    useEffect( () => {
     
        fetch( "https://sabugostores.co.ke/F1jw1PiAZwU-sanacheLPG/php/reports/customer_account.php", {
            method: "POST",
            headers: {
               'Content-Type':"application/pdf"
            },
            body: customer_id
        } )
            .then( res => {
                if ( !res.ok ) {
                    console.log( "Fetch ERROR FOR Detailed Customer" )
                }
                return res
            } )
            
            .then( response => setData(response))
        .catch(error => console.log(error))
    }, [] )
    console.log( data );
  return (
      <div>
          
         <Document file={"./1.pdf"} onLoadSuccess={onDocumentLoadSuccess}>
          <Page height="600" pageNumber={pageNumber} />
        </Document>
        <p> Page {pageNumber} of {numPages}</p>
        { pageNumber > 1 && 
        <button onClick={changePageBack}>Previous Page</button>
        }
        {
          pageNumber < numPages &&
          <button onClick={changePageNext}>Next Page</button>
        }
          
    </div>
  )
}

export default CustomerAccount