import { Button, CardContent, TextField } from '@material-ui/core'
import { Card } from '@mui/material'
import React, { useState } from 'react'

function ExpensesPage() {
  const [expense, setExpense] = useState( { Amount: "", description: "" } );
  function handleChange( e ) {
    setExpense( prevState => {
      return {...prevState,[e.target.name]:e.target.value}
    })
  }
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <div className='expensesBackBtn'>
        <Button variant='contained' color="primary">Back</Button>
      </div>
      <Card className='formExpenseCard'>
        <CardContent className='formExpense'>
          <TextField label="Amount" variant="outlined" name='Amount'
            type={"number"} value={expense.Amount} onChange={ handleChange} /><br></br>
          <TextField label="Description" variant="outlined" onChange={handleChange}
            name="description" type={"text"} value={expense.description} /><br></br>
          <Button variant='contained' color='primary'>Add Expense</Button>
        </CardContent>
      </Card>
    </div>
    
  )
}

export default ExpensesPage