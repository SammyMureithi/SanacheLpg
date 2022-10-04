import { Button ,TextField} from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomerList from '../Components/CustomerList'

function CustomersPages() {
    const [customers, setCustomers] = useState( null );
    useEffect( () => {
        fetch( "https://sabugostores.co.ke/F1jw1PiAZwU-sanacheLPG/php/selectCustomers.php" )
            .then( res => {
                if ( !res.ok ) {
                console.log("Unsuccessful Fetch")
                }
                return res;
            } )
            .then( res => res.json() )
            .then( data => setCustomers(data) )
        .catch(error => console.log(error))
    }, [] )
  return (
      <>
          <div className='customerPageTop'>
              <Button variant='contained'>Back</Button>
          <TextField label="Search" variant="outlined"
              name='username' 
                  type="text" />
              <Button variant='outlined'>Customer Summary</Button>
          </div>
      </>
  )
}

export default CustomersPages