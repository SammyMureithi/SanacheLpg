import { Button, Fab, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Accessory from '../Components/Accessory'

import SummeryCard from '../Components/SummeryCard'
import AddIcon from '@mui/icons-material/Add';
import { ContextConsumer } from '../Contexts/Context';
import Drawer from '../Components/Drawer';


function DashBoard() {
    const [data, setData] = useState();
 
    return (
            <ContextConsumer>
            {Context => {
                   useEffect( () => {
                    const stationID = new FormData();
                       stationID.append( "stationId", Context.userSession.stationID );
                       fetch( "https://sabugostores.co.ke/F1jw1PiAZwU-sanacheLPG/php/fetch_home_data_.php", {
                           method: "POST",
                           headers: {
                            
                           },
                           body: stationID
                       } )
                           .then( res => res.json() )
                           .then( data => console.log( data ) )
                           .catch( error => console.log( error ) );
                },[])
                return (
                    <div>
                       <div className='sumCard'>
                            <Drawer fullname={Context.userSession.fullname} />
                            <SummeryCard size={"6kg"} />
                            <SummeryCard size="13kg" />
                        </div>
                        <div className='others'>
                            <Accessory title="Others" amount="3kg,22.5kg,45kg,50kg" />
                            <Accessory title={"Accessory"} amount="0" />
                            <Accessory title={"Todays Sales"} amount="Kes.20,192" />
                            <Accessory title={"Todays Expenses"} amount="Kes.192" />
                        </div>
                        <Fab color="primary" aria-label="add" id='fab'>
                            <AddIcon />
                        </Fab>
                    </div>
                    )
                }}
            </ContextConsumer>
          
 
     
  )
}

export default DashBoard