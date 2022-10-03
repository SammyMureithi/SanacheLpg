import React, { useState } from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { Dialog,DialogContent,DialogTitle,DialogContentText,DialogActions, Button } from '@mui/material'
function LogOut() {
    const [open, setOpen] = useState( false );
    function handleClose() {
        setOpen( false );
    }
    function handleClickOpen() {
        setOpen( true );
    }
  return (
      <>
          <LogoutIcon onClick={handleClickOpen} />
          <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          >
               <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                      Are you sure you want to logOut {sessionStorage.getItem("fullname")}?
                  </DialogContentText>
        </DialogContent>
              <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleClose} variant="contained">Logout</Button>
        </DialogActions>
        </Dialog>
      </>
  )
}

export default LogOut