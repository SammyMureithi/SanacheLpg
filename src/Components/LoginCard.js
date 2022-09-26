import { CardMedia } from '@mui/material'
import { CardContent } from '@mui/material'
import { Grid } from '@mui/material'
import { TextField } from '@mui/material'
import { Button,CardActions } from '@mui/material'
import { Card } from '@mui/material'
import React from 'react'

function LoginCard() {
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
                          <TextField label="Username" variant="outlined" />
                      </Grid>
                      <Grid item>
                          <TextField label="Password" variant="outlined" />
                      </Grid>
                  </Grid>
      </CardContent>
      <CardActions>
        <Button variant="contained" color='primary' id='loginBtn'>LOGIN</Button>
              </CardActions>
              <CardContent>
                  <Button variant='text'>Forgot Password</Button>
              </CardContent>
    </Card>
      </>
  )
}

export default LoginCard