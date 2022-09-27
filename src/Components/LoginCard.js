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
import { ContextConsumer } from '../Contexts/Context'

function LoginCard() {
    const navigate = useNavigate();
    return (
      <ContextConsumer>
            {context => {
                if(context.errorResponse.error === false){navigate( "/DashBoard" )} 
                const newToast = context.errorResponse.error ? (
                    <Stack spacing={2} sx={{ width: '100%' }}>
                        <Snackbar open={true} autoHideDuration={2000} >
                            <Alert severity="error" sx={{ width: '100%' }}>
                                {context.errorResponse.message}
                            </Alert>
                        </Snackbar>
                    </Stack>
                ) :
                    (
                        <Stack spacing={2} sx={{ width: '100%' }}>
                            <Snackbar open={true} autoHideDuration={2000} >
                                <Alert severity="success" sx={{ width: '100%' }}>
                                {context.errorResponse.message}
                                </Alert>
                            </Snackbar>
                        </Stack> );
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
                                            name='username' value={context.userInput.username}
                                            onChange={context.handleLoginInputChange} type="text"/>
                                 </Grid>
                                 <Grid item>
                                     <TextField label="Password" variant="outlined" 
                                            name='password' value={context.userInput.password}
                                            onChange={context.handleLoginInputChange} type="password" />
                                 </Grid>
                             </Grid>
                 </CardContent>
                 <CardActions>
                   <Button variant="contained" color='primary' id='loginBtn' onClick={context.Login}>LOGIN</Button>
                         </CardActions>
                         <CardContent>
                             <Button variant='text'>Forgot Password</Button>
                         </CardContent>
                     </Card>
                     {context.errorResponse.error === null? null: newToast}
                    
                 </>
                )
            }}
      </ContextConsumer>
     
  )
}

export default LoginCard