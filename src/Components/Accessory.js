import { Box } from '@mui/material'
import { Dialog,DialogContent,DialogTitle,DialogContentText,DialogActions } from '@mui/material'
import { Button } from '@mui/material'
import { Typography } from '@mui/material'
import React, { useState } from 'react'
import AlertDialog from './PopOverDashBoard'

function Accessory( { title, amount } ) {
  const [open, setOpen] = useState( false );
  function handleClick() {
    setOpen( true );
  }
  function handleClose() {
    setOpen( false );
  }
  return (
    <>
      <Box sx={{ color: 'primary.main', boxShadow: 4, maxWidth: "300px", margin: "10px auto", width: "80%" }}
      onClick={handleClick}>
          <Typography variant='h5'>{title}</Typography>
          <Typography variant='h9'>{amount}</Typography>
      </Box>
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
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
    
  )
}

export default Accessory