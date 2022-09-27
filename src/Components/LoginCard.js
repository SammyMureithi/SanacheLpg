import { CardMedia } from '@mui/material'
import { CardContent } from '@mui/material'
import { Grid } from '@mui/material'
import { Snackbar } from '@mui/material'
import { Stack } from '@mui/material'
import { Alert } from '@mui/material'
import { TextField } from '@mui/material'
import { Button,CardActions } from '@mui/material'
import { Card } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginCard() {
    
    const [response, setResponsonse] = useState( {
        error: null,
        message:""
    } );
    const [loginDetails, setLoginDetails] = useState( {
        username: "",
        password:""
    } )
    function handleInputChange( e ) {
        setLoginDetails( prevDetails => {
            return {...prevDetails,[e.target.name]:e.target.value}
        } )
    }
    const navigate = useNavigate();
    function Login() {
        const newFormData = new FormData();
        newFormData.append( "username", loginDetails.username );
        newFormData.append( "password", loginDetails.password );
        fetch( "https://sabugostores.co.ke/F1jw1PiAZwU-sanacheLPG/php/login.php", {
            method: "POST",
            headers: {
                
            },
            body: newFormData
        } )
            .then( res => res.json() )
            .then( data => {
                setResponsonse( data )
                if ( data.error === false ) {
                    window.location.href = "/DashBoard";
                }
            }
                )  
            .catch( error => console.log( error ) );
        if ( response.error === false ) {
            console.log( response.error );
            console.log( "Login Successfull" )
            window.location.href = "/DashBoard";
        }
        else {
            console.log( response.error );
            console.log("Not Loggeded in")
            return null;
        }
    }
    const newToast = response.error ? (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={true} autoHideDuration={2000} >
                <Alert severity="error" sx={{ width: '100%' }}>
                    {response.message}
                </Alert>
            </Snackbar>
        </Stack>
    ) : (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={true} autoHideDuration={2000} >
                <Alert severity="success" sx={{ width: '100%' }}>
                    {response.message}
                </Alert>
            </Snackbar>
        </Stack> )
  return (
      <>
         <Card sx={{ maxWidth: 345 }} id="loginCard">
      <CardMedia
        component="img"
        height="fit-content"
        image="../../Img/icon.jpeg"
        alt="sanache icons"
      />
              <CardContent>
                  <Grid container direction={"column"} spacing={2}>
                      <Grid item>
                          <TextField label="Username" variant="outlined" 
                              name='username' value={loginDetails.username} onChange={handleInputChange} />
                      </Grid>
                      <Grid item>
                          <TextField label="Password" variant="outlined" 
                          name='password'    value={loginDetails.password} onChange={handleInputChange} type="password"/>
                      </Grid>
                  </Grid>
      </CardContent>
      <CardActions>
        <Button variant="contained" color='primary' id='loginBtn' onClick={Login}>LOGIN</Button>
              </CardActions>
              <CardContent>
                  <Button variant='text'>Forgot Password</Button>
              </CardContent>
          </Card>
          {response.error ===null? null: newToast}
         
      </>
  )
}

export default LoginCard