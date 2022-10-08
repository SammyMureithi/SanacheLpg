import React, { useEffect, useState } from 'react'

function UnconfirmedExpenses() {
    const [unconfirmedExpenses, setUnconfirmedExpenses] = useState( [] );
    useEffect( () => {
        fetch( "https://sabugostores.co.ke/F1jw1PiAZwU-sanacheLPG/php/unconfirmedExpenses.php" )
            .then( res => {
                if ( !res.ok ) {
                console.log("Error Fetch Expenses")
                }
                return res;
            } )
            .then( res => res.json() )
            .then( data => {
                setUnconfirmedExpenses( data );
            } )
            .catch( error => console.log( error ) )
        
    },[])
  return (
      <>
      </>
  )
}

export default UnconfirmedExpenses