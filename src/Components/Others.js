import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'

function Others() {
  return (
      <div>
          <Box sx={{ color: 'primary.main', boxShadow: 4,maxWidth:"300px",margin:"0px auto",width:"fit-content",padding:"0px 2rem"}}>
              <Typography variant='h5'>Others</Typography>
              <Typography variant='h9'>3kg,22.5kg,45kg,50kg</Typography>
          </Box>
    </div>
  )
}

export default Others