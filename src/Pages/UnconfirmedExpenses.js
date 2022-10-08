import { Button, Card, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

function UnconfirmedExpenses() {
    const [unconfirmedExpenses, setUnconfirmedExpenses] = useState( null );
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
        
    }, [] )
    const res =  unconfirmedExpenses === null ? null : (
        unconfirmedExpenses.map( element => {
            return (
                <Card key={element.expense_id} className="expenseCardItem">
                     <CardContent >
                    <Typography variant='h6'>Description: {element.description}</Typography>
                    <Typography variant='h6'>Amount:{element.amount}</Typography>
                    <Typography variant='h6'>Processed By:{element.processed_by}</Typography>
                    <Typography variant='h6'>{element.processed_date}</Typography>
                        <Typography variant='h6'>Shop:{element.shops_mobile_name}</Typography>
                        <div className='expenseBtn'>
                        <Button variant='contained' color='success'>Accept</Button>
                        <Button variant='contained' color='error'>Reject</Button>
                        </div>
                        
                </CardContent>
                </Card>
               
            )
        })
    )
  return (
      <>
          <Typography variant='h5'>Unconfirmed Expenses</Typography>
          <Card className='masterExpenseCard'>
          {res}
          </Card>
         
      </>
  )
}

export default UnconfirmedExpenses