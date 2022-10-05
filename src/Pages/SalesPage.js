import { Autocomplete, Button, Card, CardContent, Dialog, DialogContent, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchProducts from '../Components/SearchProducts';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function SalesPage() {
    const navigate = useNavigate();
    const [open,setOpen]=useState(true)
    const [search, setSearch] = useState( "" );
    const [customerName, setCustomerName] = useState( "Customer" );
    const [payment, setPayment] = useState();
    const [salesType, setSalesType] = useState();
    const [value, setValue] = React.useState ("");
    const [inputValue, setInputValue] = React.useState( '' );
    const options = ['Afri-Gas 6kg', 'K-gas 6kg', 'Pro-Gas 13kg', 'Mwanga 13kg'];
    const products = [
        {
            productName: "Afri-Gas 6kg",
            quantity: "20",
            price: "2300"
        },
        { 
            productName: "Pro-Gas 13kg",
            quantity: "20",
            price: 2300
        },
        { 
            productName: "K-Gas 13kg",
            quantity: "20",
            price: "2300"
        }
    ]
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
    function handleClose() {
        setOpen( false );
        navigate( -1 );
    }
    function handleSaleTypeClick( e ) {
        setSalesType( e.target.name );
        setOpen(false)
    }
    console.log( value );
   
  return (
      <>
          <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description">
              <DialogContent className='salesType'>
                  <Button variant="outlined" name="Retail" onClick={handleSaleTypeClick}>Retail</Button>
                  <Button variant="outlined" name="Wholesale" onClick={handleSaleTypeClick}>Wholesale</Button>
                  <Button variant="outlined" name="Vender" onClick={handleSaleTypeClick}>Vendor</Button>
                  <Button variant="outlined" name="return_sales" onClick={handleSaleTypeClick}>Return Sales</Button>
                  <Button variant="outlined" name="rePrintReceipt" onClick={handleSaleTypeClick}>Re-Print Receipt</Button>
                  <Button onClick={()=>navigate(-1)} variant="contained" color='error'>Cancel</Button>
              </DialogContent>
              
          </Dialog>
          <div className='customerPageTop'>
              <Button onClick={() => navigate( -1 )} variant="outlined">Back</Button>
              
              <Autocomplete
                  variant="outlined"
                  id="controllable-states-demo"
                  autoComplete="true"
                  options={products}
                  sx={{ width: 300 }}
                  renderInput={( params ) => <TextField {...params} label="Search Product"  variant='outlined'/>}
                  getOptionLabel={( option ) => `${option.productName}: ${option.price}`}
                  value={products}
                  renderOption={(props, option) => { 
                      return (
                          <Card key={option.productName}>
                              <CardContent className="searchProductSale">
                                  <Typography variant='h6'>{`Name: ${option.productName}`}</Typography>
                                  <Typography variant='h8'>{`Price:${option.price}`}</Typography>
                                  <Typography variant='h7'>{`In-Stock: ${option.quantity}`}</Typography>
                                  <AddShoppingCartIcon className='cartAdd'></AddShoppingCartIcon>
                              </CardContent>
                          </Card>
                      )
                  } }
      />
          </div>
          <div className='products'>
              
          </div>
          <div>
              <Card className='salesCard'>
              <CardContent id="salesCardContent">
                      <Typography variant='h6'>SalesType:</Typography>
                      <Typography variant='h6'>{salesType!==null?salesType:null}</Typography>
                  </CardContent>
                  <CardContent id="salesCardContent">
                      <Typography variant='h6'>Customer Name:</Typography>
                      <TextField label="Search" variant="filled"
                  name='Customer' 
                  onChange={handleCustomerNameChange}
                  type="text" />
                  </CardContent>
                  <CardContent id="salesCardContent">
                      <Typography variant='h6'>Discount:</Typography>
                      <TextField label="Discount" variant="filled" name='Discount'
                          onChange={handleCustomerNameChange} type="number" />
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
                      <Button variant="outlined" color='success'>Print</Button>
                  </CardContent>
              </Card>
          </div>
         
      </>
  )
}

export default SalesPage