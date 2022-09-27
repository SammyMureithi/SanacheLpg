import { Box } from '@mui/material'
import { Dialog,DialogContent,DialogTitle,DialogContentText,DialogActions } from '@mui/material'
import { Button } from '@mui/material'
import { Typography } from '@mui/material'
import React, { useState } from 'react'
import AlertDialog from './PopOverDashBoard'

function Accessory( { title, amount ,classname} ) {
  const [open, setOpen] = useState( false );
  function handleClick() {
    setOpen( true );
  }
  function handleClose() {
    setOpen( false );
  }
 const pop= function showPopupDialog() {
    if ( classname === "Others" ) {
      return (
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Your Current Stock"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description1">
            <Typography variant='h8'></Typography>
              <Typography variant='h8'>Refills</Typography>
              <Typography variant='h8'>Empty</Typography>
            </DialogContentText>
            <DialogContentText id="alert-dialog-description1">
            <Typography variant='h8'>3Kg</Typography>
              <Typography variant='h8'>0</Typography>
              <Typography variant='h8'>10</Typography>
            </DialogContentText>
            <DialogContentText id="alert-dialog-description1">
            <Typography variant='h8'>22.5Kg</Typography>
              <Typography variant='h8'>0</Typography>
              <Typography variant='h8'>10</Typography>
            </DialogContentText>
            <DialogContentText id="alert-dialog-description1">
            <Typography variant='h8'>45Kg</Typography>
              <Typography variant='h8'>0</Typography>
              <Typography variant='h8'>10</Typography>
            </DialogContentText>
            <DialogContentText id="alert-dialog-description1">
            <Typography variant='h8'>50Kg</Typography>
              <Typography variant='h8'>0</Typography>
              <Typography variant='h8'>10</Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
        </Dialog>
      )
    }
    else if ( classname === "Acessory" ) {
      return (
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Your Accessory Stock"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description1">
            <Typography variant='h8'>Burner:</Typography>
              <Typography variant='h8'>0</Typography>
              </DialogContentText>
            <DialogContentText id="alert-dialog-description1">
            <Typography variant='h8'>Grill</Typography>
              <Typography variant='h8'>0</Typography>
              </DialogContentText>
            <DialogContentText id="alert-dialog-description1">
            <Typography variant='h8'>Regulator</Typography>
              <Typography variant='h8'>0</Typography>
            </DialogContentText>
            <DialogContentText id="alert-dialog-description1">
            <Typography variant='h8'>HosePipe</Typography>
              <Typography variant='h8'>0</Typography>
            </DialogContentText>
            <DialogContentText id="alert-dialog-description1">
            <Typography variant='h8'>Oil</Typography>
              <Typography variant='h8'>0</Typography>
            </DialogContentText>
            <DialogContentText id="alert-dialog-description1">
            <Typography variant='h8'>Others</Typography>
              <Typography variant='h8'>0</Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
        </Dialog>
      )
    }
    else if (classname==="TodaysSales") {
      return (
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Todays Sales"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description1">
            <Typography variant='h8'>Net Sales:</Typography>
              <Typography variant='h8'>Kes.0</Typography>
              </DialogContentText>
            <DialogContentText id="alert-dialog-description1">
            <Typography variant='h8'>Invoice Sale</Typography>
              <Typography variant='h8'>Kes.0</Typography>
              </DialogContentText>
            <DialogContentText id="alert-dialog-description1">
            <Typography variant='h8'>Discounts</Typography>
              <Typography variant='h8'>Kes.0</Typography>
            </DialogContentText>
            <DialogContentText id="alert-dialog-description1">
            <Typography variant='h8'>WholeSale</Typography>
              <Typography variant='h8'>Kes.0</Typography>
            </DialogContentText>
            <DialogContentText id="alert-dialog-description1">
            <Typography variant='h8'>Retail</Typography>
              <Typography variant='h8'>Kes.0</Typography>
            </DialogContentText>
            <DialogContentText id="alert-dialog-description12">
            <Typography variant='h8'></Typography>
            <Typography variant='h8'>Cylinder</Typography>
              <Typography variant='h8'>Refill</Typography>
            </DialogContentText>
            <DialogContentText id="alert-dialog-description1">
            <Typography variant='h8'>3kg</Typography>
              <Typography variant='h8'>Kes.0</Typography>
              <Typography variant='h8'>Kes.0</Typography>
            </DialogContentText>
            <DialogContentText id="alert-dialog-description1">
            <Typography variant='h8'>6kg</Typography>
              <Typography variant='h8'>Kes.0</Typography>
              <Typography variant='h8'>Kes.0</Typography>
            </DialogContentText>
            <DialogContentText id="alert-dialog-description1">
            <Typography variant='h8'>13kg</Typography>
              <Typography variant='h8'>Kes.0</Typography>
              <Typography variant='h8'>Kes.0</Typography>
            </DialogContentText>
            <DialogContentText id="alert-dialog-description1">
            <Typography variant='h8'>22.5kg</Typography>
              <Typography variant='h8'>Kes.0</Typography>
              <Typography variant='h8'>Kes.0</Typography>
            </DialogContentText>
            <DialogContentText id="alert-dialog-description1">
            <Typography variant='h8'>50Kg</Typography>
              <Typography variant='h8'>Kes.0</Typography>
              <Typography variant='h8'>Kes.0</Typography>
            </DialogContentText>
            <DialogContentText id="alert-dialog-description1">
            <Typography variant='h8'>Accessory</Typography>
              <Typography variant='h8'>Kes.0</Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
        </Dialog>
      )
      }
    else {
      return (
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Todays Expenses"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description13">
            <Typography variant='h8'>Confirmed</Typography>
              <Typography variant='h8'>Kes.0</Typography>
            </DialogContentText>
            <DialogContentText id="alert-dialog-description1">
            <Typography variant='h8'>Pending</Typography>
              <Typography variant='h8'>Kes.0</Typography>
            </DialogContentText>
            <DialogContentText id="alert-dialog-description12">
            <Typography variant='h8'>Rejected</Typography>
              <Typography variant='h8'>Kes.0</Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
        </Dialog>
      )
    }
  }
  return (
    <>
      <Box sx={{ color: 'primary.main', boxShadow: 4, maxWidth: "300px", margin: "10px auto", width: "80%" }}
      onClick={handleClick}>
          <Typography variant='h5'>{title}</Typography>
          <Typography variant='h9'>{amount}</Typography>
      </Box>
      {pop()}
    </>
    
  )
}

export default Accessory