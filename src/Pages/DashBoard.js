import { Fab, Typography } from '@mui/material'
import React from 'react'
import Accessory from '../Components/Accessory'

import SummeryCard from '../Components/SummeryCard'
import AddIcon from '@mui/icons-material/Add';
import { ContextConsumer } from '../Contexts/Context';


function DashBoard() {
    return (
            <ContextConsumer>
            {Context => {
                console.log( Context.userSession );
                return (
                    <div>
                        <div className='sumCard'>
                            <Typography variant='h10'>fullname{Context.userSession.fullname}</Typography>
                            <br></br>
                            <Typography variant='h10'> Station{Context.userSession.station}</Typography>
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