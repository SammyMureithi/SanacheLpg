import { Button, Fab, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Accessory from '../Components/Accessory'

import SummeryCard from '../Components/SummeryCard'
import AddIcon from '@mui/icons-material/Add';
import { ContextConsumer } from '../Contexts/Context';
import Drawer from '../Components/Drawer';


function DashBoard() {
    let userDash = sessionStorage.getItem( "username" );
    console.log( "Username" + userDash );
    const [data, setData] = useState( {
        ttl6kgRefill: 280,
        ttl13kgRefill: 126,
        ttl45kgRefill: 0,
        ttl6kgCylinder: 262,
        ttl13kgCylinder: 124,
        ttl45kgCylinder: 0,
        ttl3kgRefill: 0,
        ttl22kgRefill: 0,
        ttl50kgRefill: 0,
        ttl3kgCylinder: 0,
        ttl22kgCylinder: 0,
        ttl50kgCylinder: 0,
        ttl6kgGasPercentage: 51.66051660516605,
        tt13kgGasPercentage: 50.4,
        tt45kgGasPercentage: 0,
        ttl6kgEmptiesPercentage: 48.33948339483395,
        tt13kgEmptiesPercentage: 49.6,
        tt45kgEmptiesPercentage: 0,
        ttlAccessories: 30,
        ttlBurner: 0,
        ttlGrill: 30,
        ttlRegulator: 0,
        ttlHorse_pipe: 0,
        ttlOthers: 0,
        ttlOils: 0,
        ttlSale: 0,
        invoice_sale: 0,
        ttl_rt: 0,
        ttl_ws: 0,
        ttl6kgRefillSales: 0,
        ttl13kgRefillSale: 0,
        ttl45kgRefillSale: 0,
        ttl6kgCylinderSale: 0,
        ttl13kgCylinderSale: 0,
        ttl45kgCylinderSale: 0,
        ttl3kgRefillSales: 0,
        ttl22kgRefillSale: 0,
        ttl50kgRefillSale: 0,
        ttl3kgCylinderSale: 0,
        ttl22kgCylinderSale: 0,
        ttl50kgCylinderSale: 0,
        ttlAccessoriesSale: 0,
        ttPending: 0,
        ttExpConfirmed: 0,
        ttRejects: 0,
        totalDiscount: 0

    
    });
    const [stationId, setStationId] = useState("");
    useEffect( () => {
        const stationID = new FormData();
           stationID.append( "stationId", sessionStorage.getItem("stationID"));
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
                setStationId(sessionStorage.getItem("stationID"))
                return (
                    <div>
                       <div className='sumCard'>
                            <Drawer/>
                            <SummeryCard size={"6kg"} percentage={data.ttl6kgGasPercentage} gas={data.ttl6kgRefill}
                                empyty={data.ttl6kgCylinder}  />
                            <SummeryCard size="13kg" percentage={data.tt13kgGasPercentage} gas={data.ttl13kgRefill}
                                empyty={data.ttl13kgCylinder} />
                        </div>
                        <div className='others'>
                            <Accessory title="Others" amount="3kg,22.5kg,45kg,50kg"  classname="Others" data={ data}/>
                            <Accessory title={"Accessory"} amount={data.ttlAccessories}  classname="Acessory" data={ data}/>
                            <Accessory title={"Todays Sales"} amount={"Kes."+data.ttlSale}  classname="TodaysSales" data={ data}/>
                            <Accessory title={"Todays Expenses"} amount={"Kes."+ data.ttExpConfirmed}  classname="TodaysExpenses" data={ data}/>
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