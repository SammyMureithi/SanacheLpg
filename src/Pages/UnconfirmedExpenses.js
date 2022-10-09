import { Alert, Button, Card, CardContent, Snackbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

function UnconfirmedExpenses() {
    const [unconfirmedExpenses, setUnconfirmedExpenses] = useState( null );
    const [response, setReponse] = useState( { "error": true, "message": " Err in updating " } )
    const [open, setOpen] = useState( false );
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
                            <Button variant='contained' color='error' onClick={() => handleConfirmationExpense( element.expense_id, 2 )}>Reject</Button>
                            <Button variant='contained' color='success' onClick={() => handleConfirmationExpense( element.expense_id, 3 )}>Accept</Button>
                        </div>
                        
                </CardContent>
                </Card>
               
            )
        })
    )
    function handleClose() {
        setOpen(false)
    }
    function handleConfirmationExpense( id, confirmStatus ) {
        const confirmationExpenseData = new FormData();
        confirmationExpenseData.append( "loggedUserID", sessionStorage.getItem( "userID" ) );
        confirmationExpenseData.append( "confirmed_status", confirmStatus );
        confirmationExpenseData.append( "expense_id", id );
        fetch( "https://sabugostores.co.ke/F1jw1PiAZwU-sanacheLPG/php/confirmExpensesURL.php", {
            method:"POST",
            headers: {},
            body:confirmationExpenseData
        } )
            .then( res => {
                if ( !res.ok ) {
                    console.log( "Error Updating Expenses" );
                }
                return res;
            } )
            .then( res => res.json() )
            .then( data => {
                setReponse( data )
                setOpen( true )
                if ( data.error === false ) {
                    const newUnconfirmedExpenses = unconfirmedExpenses.filter( element => element.expense_id !== id );
                    setUnconfirmedExpenses( newUnconfirmedExpenses );
                }
               
            } )
            .catch( error => console.log( error ) )
        
    }
  return (
      <>
          <Typography variant='h5'>Unconfirmed Expenses</Typography>
          <Card className='masterExpenseCard'>
          {res}
          </Card>
          <Snackbar open={open} autoHideDuration={3000} onClose={()=>setOpen(prevState=> !prevState)}>
          <Alert severity={response.error ? "error" : "success"} sx={{ width: '100%' }} onClose={handleClose}>
            {response.message}
          </Alert>
        </Snackbar>
      </>
  )
}

export default UnconfirmedExpenses