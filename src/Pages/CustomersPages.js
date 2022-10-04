import { Button ,TextField} from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomerList from '../Components/CustomerList'

function CustomersPages() {
    const [customers, setCustomers] = useState( null );
    const [search, setSearch] = useState( "" );
    function handleSearchChange(e) {
        setSearch( e.target.value );
    }
    useEffect( () => {
        fetch( "https://sabugostores.co.ke/F1jw1PiAZwU-sanacheLPG/php/selectCustomers.php" )
            .then( res => {
                if ( !res.ok ) {
                    console.log( "Unsuccessful Fetch" )
                }
                return res;
            } )
            .then( res => res.json() )
            .then( data => {
                setCustomers( data ); 
            } )
            .catch( error => console.log( error ) );
     
    }, [] )
    //console.log( customers );
   const res= function setCustomersList() {
       if ( customers !== null ) {
           const filteredData = customers.filter( customer => customer.customer_name.toUpperCase().includes( search.toUpperCase() ) );
            return (
                filteredData.map( element => {
                   return (
                       <CustomerList key={element.customer_id} name={element.customer_name} account={element.debt}/>
                   )
               })
           )
            
        }
        else {
            
            return null;
        }
    
    }
   
  return (
      <>
          <div className='customerPageTop'>
              <Button variant='contained'>Back</Button>
              <TextField label="Search"
                  variant="outlined"
                  name='search' 
                  onChange={handleSearchChange}
                  type="text" />
              <Button variant='outlined'>Customer Summary</Button>
          </div>
             {res()}
      </>
  )
}

export default CustomersPages