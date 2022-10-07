import { Button, Card, CardContent, CardHeader, Snackbar, Typography } from '@material-ui/core'
import { RssFeed } from '@mui/icons-material';
import { Alert } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function TransferPage() {
  const [transfer, setTransfer] = useState( [] )
  const [handleSnapOpen, sethandleSnapOpen] = useState( false );
  const [response, setResponse] = useState({error:false,message:"Success"});
  const navigate = useNavigate();
  const shop_id = new FormData();
  shop_id.append("shop_id",sessionStorage.getItem("stationID"))
  useEffect( () => {
    fetch( "https://sabugostores.co.ke/F1jw1PiAZwU-sanacheLPG/php/getTransfers.php", {
      method: "POST",
      headers: {
        
      },
      body: shop_id
    } )
      .then( res => res.json() )
      .then( data => setTransfer(data) )
    .catch(error => console.log(error))
  }, [] )
  const res = transfer.length < 0 ? null : (
    <>
      {transfer.map( element => {
        return (
          <Card key={element.tr_id} className="transferListCard">
            <CardContent>
            <Typography variant='h6'>{element.message}</Typography>
            <div className='transfersBtn'>
                <Button
                  variant='contained'
                  color="secondary"
                  name="accept"
                  onClick={()=>handleUpdateTransfer( element.tr_id,2)}>Reject</Button>
                <Button variant="contained"
                  color="primary"
                  name="accept"
                  onClick={()=>handleUpdateTransfer( element.tr_id,1)}>Accept</Button>
            </div>
            </CardContent>
          </Card>      
        )
      })}
    </>
  )
  function handleUpdateTransfer( id, e ) {
    const acknowledgeTransfer = new FormData();
    acknowledgeTransfer.append( "loggedUserID", sessionStorage.getItem("userID") );
    acknowledgeTransfer.append( "loggedShopID", sessionStorage.getItem("stationID") );
    acknowledgeTransfer.append( "tran_id", id );
    acknowledgeTransfer.append( "confirmed_status", e );
    fetch( "https://sabugostores.co.ke/F1jw1PiAZwU-sanacheLPG/php/acknowledge_transfer.php", {
      method: "POST",
      headers: {
        
      },
      body:acknowledgeTransfer
    } )
      .then( res => {
        if ( !res.ok ) {
        console.log("Updating transfer Error")
        }
        return res;
      } )
      .then( res => res.json() )
      .then( data => {
        setResponse( data );
        if ( data.error === false ) {
          sethandleSnapOpen(true)
          const newResult = transfer.filter( element => element.tr_id !== id );
          setTransfer( newResult );
        }
        console.log( data )
      } )
      .catch( error => console.log( error ) )
  }
  function handleClose() {
    sethandleSnapOpen(false)
  }
  return (
    <div>
      <div className='transferTop'>
        <Button variant='outlined'>Transfer In</Button>
        <Button variant='outlined'>Transfer Out</Button>
        <Button variant='contained' onClick={()=>navigate(-1)}>Back</Button>
      </div>
      <Typography variant='h6'>Incomming Transfers</Typography>
      <Card>
        <CardContent>
          {res}
        </CardContent>
      </Card>
      <Snackbar open={handleSnapOpen} autoHideDuration={3000} onClose={()=>sethandleSnapOpen(prevState=> !prevState)}>
          <Alert severity={response.error ? "error" : "success"} sx={{ width: '100%' }} onClose={handleClose}>
            {response.message}
          </Alert>
        </Snackbar>
    </div>
  )
}

export default TransferPage