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
    else {
      return (
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running.{classname}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose}>Allaa</Button>
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