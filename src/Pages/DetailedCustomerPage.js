import { Button, Card, CardContent, Chip, TextField, ThemeProvider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DateTimePickerComponent from '../Components/DateTimePicker';


function DetailedCustomerPage() {
  const { CustomerId } = useParams();
  const [date, setDate] = useState( new Date() );
  const [customerDetail, setCustomerDetail] = useState(
    {customer_name: "",
    customer_phone:""}
  );
  
  useEffect( () => {
    const customer_id = new FormData();
    customer_id.append( "customer_id", CustomerId );
    fetch( "https://sabugostores.co.ke/F1jw1PiAZwU-sanacheLPG/php/details_customer.php", {
      method: "POST",
      headers: {
        
      },
      body: customer_id
    } )
      .then( res => {
        if ( !res.ok ) {
          console.log( "Error in Fetching" );
        }
        return res
      } )
      .then( res => res.json() )
      .then( data => setCustomerDetail(data) )
      .catch( error => console.log( error ) );
  }, [CustomerId] )

  return (
    <>
      <h1>Detailed Customer Reports</h1>
      <Card className='DetailedCustomerCard'>
        <CardContent>
          <Typography variant='h6'>{customerDetail.customer_name}</Typography>
          <Typography variant='h6'>{customerDetail.customer_phone}</Typography>
          <div className='DetailedCustomerCardButton'>
          <Button variant='outlined' endIcon={<AccountBalanceIcon />}>Report</Button>
          <Button variant='outlined' endIcon={<AccountBalanceIcon/>}>Account</Button>
          </div>
        </CardContent>
      </Card>
      
    </>
    
    
  )
}

export default DetailedCustomerPage