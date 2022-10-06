import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function CustomerAccount() {
    const { CustomerId } = useParams();
    const [data, setData] = useState( "Mure" );
    const customer_id = new FormData();
    customer_id.append( "customer_id", CustomerId );
 
    useEffect( () => {
        fetch( "https://sabugostores.co.ke/F1jw1PiAZwU-sanacheLPG/php/reports/customer_account.php", {
            method: "POST",
            headers: {
               
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
          <>Imekuwa motoo </>
    </div>
  )
}

export default CustomerAccount