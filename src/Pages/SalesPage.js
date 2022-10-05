import { Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SalesPage() {
    const navigate = useNavigate();
    const [search, setSearch] = useState( "" );
    const [customerName, setCustomerName] = useState( "Customer" );
    const [payment, setPayment] = useState();
    function handleCustomerNameChange( e ) {
        setCustomerName( e.target.value );
    }
    function handleSearchChange(e) {
        e.preventDefault();
        setSearch( e.target.value );
    }
    function handleChange( e ) {
       setPayment( e.target.value)
    }
  return (
      <>
          <div className='customerPageTop'>
              <Button onClick={() => navigate( -1 )} variant="outlined">Back</Button>
              <TextField label="Search"
                  variant="outlined"
                  name='search' 
                  onChange={handleSearchChange}
                  type="text" />
          </div>
          <div className='products'>
              
          </div>
          <div>
              <Card className='salesCard'>
                  <CardContent id="salesCardContent">
                      <Typography variant='h6'>Customer Name:</Typography>
                      <TextField label="Search" variant="filled"
                  name='Customer' 
                  onChange={handleCustomerNameChange}
                  type="text" />
                  </CardContent>
                  <CardContent id="salesCardContent">
                      <Typography variant='h6'>Discount:</Typography>
                      <TextField label="Search" variant="filled" name='Customer' onChange={handleCustomerNameChange} type="text" />
                  </CardContent>
                  <CardContent id="salesCardContent">
                      <Typography variant='h6'>Payment:</Typography>
                      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                          <InputLabel>None</InputLabel>
                          <Select
                          labelId="demo-select-small"
                          id="demo-select-small"
                          value={payment}
                          label="Age"
                              onChange={handleChange}>
                              <MenuItem value="">
                                  <em>None</em>
                              </MenuItem>
                              <MenuItem value={"kcb"}>KCB</MenuItem>
                              <MenuItem value={"Mpesa"}>Mpesa</MenuItem>
                              <MenuItem value={'SBM'}>SBM</MenuItem>
                              <MenuItem value={"Cash"}>Cash</MenuItem>
                          </Select>
                      </FormControl>
                  </CardContent>
                  <CardContent id="salesCardContent">
                      <Typography variant='h6'>Sub-Total:0</Typography>
                      <Typography variant='h6'>Total:0</Typography>
                  </CardContent>
                  <CardContent id="salesCardContent">
                      <Button variant="contained" color="error">Abort</Button>
                      <Button variant="contained">Process</Button>
                      <Button>Print</Button>
                  </CardContent>
              </Card>
          </div>
         
      </>
  )
}

export default SalesPage