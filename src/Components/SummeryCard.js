import { Typography } from '@mui/material'
import { CardContent } from '@mui/material'
import { Card } from '@mui/material'
import React from 'react'
import RefreshIcon from '@mui/icons-material/Refresh';
import LinearProgress from '@mui/material/LinearProgress';

function SummeryCard({size,percentage,gas,empyty}) {
  return (
      <>
          <Card id='summaryCard'  sx={{ width: '75vw' ,maxWidth:"500px",margin:"2rem auto",padding:"10px 2rem"}}>
              <CardContent className='topSummary'>
                  <Typography variant='h6'>{size}</Typography>
                  <RefreshIcon/>
              </CardContent>
              <CardContent className='topSummary1'>
                  <LinearProgress value={percentage} variant="determinate" className='progessBar' color='success' />
              </CardContent>
              <CardContent className='topSummary'>
                  <Typography variant='h8' color={"success.main"}>Gas</Typography>
                  <Typography variant='h8' color={"error"}>Empties</Typography>
              </CardContent>
              <CardContent className='topSummary'>
                  <Typography variant='h10' color={"success.main"}>{gas}</Typography>
                  <Typography variant='h10' color={"error"}>{empyty}</Typography>
              </CardContent>
          </Card>
      </>
  )
}

export default SummeryCard