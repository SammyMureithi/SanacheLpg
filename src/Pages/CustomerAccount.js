import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, CardContent, Dialog, DialogActions, DialogContent, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from '@mui/material';
import DateTimePickerComponent from '../Components/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker, DesktopDateTimePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';
import { TextField } from '@mui/material';

function CustomerAccount() {
  const { CustomerName, CustomerId } = useParams();
  const [customerDetails, setCustomerDetails] = useState( {
    customer_name: "Customer",
    balance: "2334"
  })
  const [customerAccount, setCustomerAccount] = useState( [
    {
      id:1,
      invoice_number: 0,
      type: "Invoice",
      amount: "23467",
      cust_cred_balance: "345621",
      comment: "TO-BE PAID LATER",
      transaction_date: "1/2/4211",
      posted_byS:"Sammy Mureithi"
    }
  ] );
  const [open, setOpen] = useState( true );
  const navigate = useNavigate()
  const [fromDate, setFrom] = useState( new Date()  );
  const [to, setTo] = useState( new Date());
 
  const customerDetailsPost = new FormData();
  customerDetailsPost.append( "customer_id", CustomerId );
    function handleClose() {
      setOpen(false)
  }
 
  function handleRunReport() {
    fetch( "https://sabugostores.co.ke/F1jw1PiAZwU-sanacheLPG/php/reports/CustomerAccountMure.php", {
      method: "POST",
      headers: {
        
      },
      body: customerDetailsPost
    } )
      .then( res => {
        if ( !res.ok ) {
          console.log( "Error Fetch Report" )
        }
        return res;
      } )
      .then( res => res.json())
      .then( data => console.log( data ) )
      .catch( error => console.log( error ) );
    setOpen( false )
 }
   
 
 
  return (
    <div>
      <Dialog
         open={open}
         onClose={handleClose}
         aria-labelledby="alert-dialog-title"
         aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
            label={"From"}
            inputFormat="MM-DD-YYYY"
            value={fromDate}
              onChange={( newValue ) => {
                
                setFrom( newValue )
              }}
              renderInput={( params ) => <TextField {...params} />} /><br></br>
            <br></br>
            <DesktopDatePicker
            label={"To"}
            inputFormat="MM-DD-YYYY"
            value={to}
            onChange={(newValue)=> setTo(newValue)}
              renderInput={( params ) => <TextField {...params} />} />
      </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={()=>navigate(-1)}>Cancel</Button>
          <Button variant='contained' color='success' onClick={handleRunReport}>Run Report</Button>
        </DialogActions>
      </Dialog>
      <div  className='topCustomerAccountState'>
      <Button variant='outlined' onClick={()=>navigate(-1)}>Back</Button>
        <Button variant='contained'>Genenerate Pdf</Button>
    
      </div>
      
      <Card className='customerAccountCard'>
        <CardContent>
          <Typography variant='h6'>Customer Name:{ customerDetails.customer_name}</Typography>
          <Typography variant='h6'>Account Balance: { customerDetails.balance}</Typography>
          <Typography variant='h9'>From: {new Date(fromDate).toLocaleDateString()}</Typography><br></br>
          <Typography variant='h9'>To: {new Date(to).toLocaleDateString()}</Typography>
        </CardContent>
      </Card>
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align='center' >
                  Transaction
                </TableCell>
                <TableCell align='center' >
                  Invoice Number
                </TableCell>
                <TableCell align='center' >
                  Type
                </TableCell>
                <TableCell align='center' >
                  Amount
                </TableCell>
                <TableCell align='center' >
                  Balance
                </TableCell>
                <TableCell align='center' >
                  Credit Note
                </TableCell>
                <TableCell align='center' >
                  Processed Date
                </TableCell>
                <TableCell align='center' >
                  Processed By
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customerAccount.map( element => {
                return (
                  <TableRow key={element.id}>
                    <TableCell align='center'>1</TableCell>
                    <TableCell align='center'>{element.invoice_number}</TableCell>
                    <TableCell align='center'>{element.type}</TableCell>
                    <TableCell align='center'>{element.amount}</TableCell>
                    <TableCell align='center'>{element.cust_cred_balance}</TableCell>
                    <TableCell align='center'>{element.comment}</TableCell>
                    <TableCell align='center'>{ element.transaction_date}</TableCell>
                    <TableCell align='center'>{element.posted_byS}</TableCell>
              </TableRow>
                  
                )
                
            })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>


    </div>
  )
}

export default CustomerAccount