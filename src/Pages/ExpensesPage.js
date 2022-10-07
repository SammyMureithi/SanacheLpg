import { Button, CardContent, Snackbar, TextField } from '@material-ui/core'
import { Alert, Card } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ExpensesPage() {
  const [expense, setExpense] = useState( { Amount: null, description: null } );
  const [response, setResponse] = useState( { error: null, message: null } );
  const [open, setOpen] = useState( false );
  const navigate = useNavigate();
  function handleChange( e ) {
    setExpense( prevState => {
      return {...prevState,[e.target.name]:e.target.value}
    })
  }
  function handleAddExpenses() {
    const ExpenseData = new FormData();
    if ( expense.Amount !== null && expense.description !== null ) {
      ExpenseData.append( "expenseAmountET", expense.Amount );
      ExpenseData.append( "descriptionExpenseET", expense.description );
      ExpenseData.append( "loggedUserID", sessionStorage.getItem( "userID" ) );
      ExpenseData.append( "stationID", sessionStorage.getItem( "stationID" ) );
      fetch( "https://sabugostores.co.ke/F1jw1PiAZwU-sanacheLPG/php/expenses.php", {
        method: "POST",
        headers: {
          
        },
        body:ExpenseData
      } )
        .then( res => {
          if ( !res.ok ) {
          console.log("Post Error ")
          }
          return res;
        } )
        .then( res => res.json() )
        .then( data => {
          setResponse( data );
          setOpen(true)
          setExpense({Amount:"",description:""})
          console.log( data )
        } )
        .catch( error => console.log( error ) )
    }
  }
  function handleClose() {
    setOpen(false)
  }
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <div className='expensesBackBtn'>
        <Button variant='contained' color="primary" onClick={()=>navigate(-1)}>Back</Button>
      </div>
      <Card className='formExpenseCard'>
        <CardContent className='formExpense'>
          <TextField label="Amount" variant="outlined" name='Amount'
            type={"number"} value={expense.Amount} onChange={ handleChange} /><br></br>
          <TextField label="Description" variant="outlined" onChange={handleChange}
            name="description" type={"text"} value={expense.description} /><br></br>
          <Button variant='contained' color='primary' onClick={handleAddExpenses}>Add Expense</Button>
        </CardContent>
      </Card>
      <Snackbar open={open} autoHideDuration={3000} onClose={()=>setOpen(prevState=> !prevState)}>
          <Alert severity={response.error ? "error" : "success"} sx={{ width: '100%' }} onClose={handleClose}>
            {response.message}
          </Alert>
        </Snackbar>
    </div>
    
  )
}

export default ExpensesPage