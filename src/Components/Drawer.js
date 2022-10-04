import { List, Tune } from '@mui/icons-material'
import { Button, Card, CardContent, CardMedia, SwipeableDrawer, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ListItem } from '@mui/material';
import { ListItemIcon,ListItemAvatar } from '@mui/material';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { ListItemButton } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Divider } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { useNavigate } from 'react-router-dom';
function Drawer({fullname}) {
    const [open, setOpen] = useState( false );
    const navigate = useNavigate();
  return (
      <div >
          <MenuIcon onClick={()=>setOpen(prevState => !prevState)} id="drawer"></MenuIcon>
          <SwipeableDrawer
              variant="temporary"
              open={open}
              onClose={()=>setOpen(false)}
              anchor="left"

              sx={{ maxWidth: "300px" ,width:"50vw",height:"fitContent"}}
          >
              <Card sx={{width:"100%",bgcolor:"success"}} className="drawerCard"style={{backgroundColor: "#01b764"}}>
                  <CardContent className='x-close'>
                      <CloseIcon onClick={ ()=>setOpen(false)} />
                  </CardContent>
                  <CardMedia
                      component="img"
                      height={"10%"}
                     image="..sa/../Img/icon.jpeg"
                     alt="sanache icons"
                  ></CardMedia>
                  <CardContent className='tittle'>
                      <Typography variant='h6'>Sanache Gas Supplies</Typography>
                  </CardContent>
                  <CardContent style={{ backgroundColor: "white" }}>
                      <Divider />
                          <ListItem onClick={()=>navigate("/Customers")}>
                              <ListItemButton>
                                  <ListItemIcon>
                                      <SupervisedUserCircleIcon />
                                  </ListItemIcon>
                                  <ListItemText primary="Customers" />
                              </ListItemButton>
                      </ListItem>
                      <Divider />
                      <Divider />
                          <ListItem>
                              <ListItemButton>
                                  <ListItemIcon>
                                      <FileCopyIcon />
                                  </ListItemIcon>
                                  <ListItemText primary="Reports" />
                              </ListItemButton>
                      </ListItem>
                      <Divider />
                      <Typography variant='h7'>
                          {sessionStorage.getItem( "username" )}
                          ({sessionStorage.getItem("station")})
                      </Typography>
                  </CardContent>
             </Card>
          </SwipeableDrawer>
      </div>
  )
}

export default Drawer