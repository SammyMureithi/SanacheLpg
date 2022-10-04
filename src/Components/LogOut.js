import React, { useState } from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { Dialog,DialogContent,DialogTitle,DialogContentText,DialogActions, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
function LogOut() {
    const [open, setOpen] = useState( false );
    const navigate = useNavigate();
    const user_id = new FormData();
    user_id.append( "user_id", sessionStorage.getItem("userID") );
    console.log( user_id );
    function handleClose1() {
        fetch( "https://sabugostores.co.ke/F1jw1PiAZwU-sanacheLPG/php/logout.php", {
            method: "POST",
            headers: {
                
            },
            body: user_id
        })
            .then( res => {
                if ( !res.ok ) {
                    console.log( "LogOut Unsuccessful" )
                }
                return res;
            } )
            .then( res => res.json() )
            .then( data => console.log( data ) )
            .catch( error => console.log( error ) );
        navigate( "/" );
        sessionStorage.clear();
        setOpen( false );
    }
    function handleClickOpen() {
       
        setOpen( true );
    }
    function handleClose() {
        setOpen( false );
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
                  <Button onClick={()=> setOpen(false)}>Cancel</Button>
                  <Button onClick={handleClose1} variant="contained">Logout</Button>
        </DialogActions>
        </Dialog>
      </>
  )
}

export default LogOut