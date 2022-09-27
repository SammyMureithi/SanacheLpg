import { Button, Fab, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Accessory from '../Components/Accessory'

import SummeryCard from '../Components/SummeryCard'
import AddIcon from '@mui/icons-material/Add';
import { ContextConsumer } from '../Contexts/Context';
import Drawer from '../Components/Drawer';


function DashBoard() {
    const [data, setData] = useState( {
        ttl6kgGasPercentage: 0,
        ttl6kgRefill: 0,
        tt13kgGasPercentage: 0,
        ttl13kgRefill: 0,
        ttl13kgCylinder: 0,
        ttl6kgCylinder:0
    });
    const [stationId, setStationId] = useState("");
    useEffect( () => {
        const stationID = new FormData();
           stationID.append( "stationId",stationId);
           fetch( "https://sabugostores.co.ke/F1jw1PiAZwU-sanacheLPG/php/fetch_home_data_.php", {
               method: "POST",
               headers: {
                
               },
               body: stationID
           } )
               .then( res => res.json() )
               .then( data => {
                   setData( data );
               } )
               .catch( error => console.log( error ) );
    }, [stationId] )
 
    return (
            <ContextConsumer>
            {Context => {
                setStationId(Context.userSession.stationID)
                return (
                    <div>
                       <div className='sumCard'>
                            <Drawer fullname={Context.userSession.fullname} />
                            <SummeryCard size={"6kg"} percentage={data.ttl6kgGasPercentage} gas={data.ttl6kgRefill}
                                empyty={data.ttl6kgCylinder} />
                            <SummeryCard size="13kg" percentage={data.tt13kgGasPercentage} gas={data.ttl13kgRefill}
                                empyty={data.ttl13kgCylinder}/>
                        </div>
                        <div className='others'>
                            <Accessory title="Others" amount="3kg,22.5kg,45kg,50kg"  classname="Others"/>
                            <Accessory title={"Accessory"} amount="0"  classname="Acessory"/>
                            <Accessory title={"Todays Sales"} amount="Kes.20,192"  classname="TodaysSales"/>
                            <Accessory title={"Todays Expenses"} amount="Kes.192"  classname="TodaysExpenses"/>
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