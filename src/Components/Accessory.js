import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import React from 'react'

function Accessory({title,amount}) {
  return (
      <Box sx={{ color: 'primary.main', boxShadow: 4, maxWidth: "300px", margin: "10px auto", width: "80%" }}>
          <Typography variant='h5'>{title}</Typography>
          <Typography variant='h9'>{amount}</Typography>
      </Box>
  )
}

export default Accessory