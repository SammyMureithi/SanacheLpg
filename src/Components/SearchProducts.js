import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

function SearchProducts({name,price,quantity}) {
  return (
      <Card>
          <CardContent>
              <Typography>Name: ${name}</Typography>
              <Typography>Price:{price}</Typography>
              <Typography>In-Stock:{quantity}</Typography>
          </CardContent>
    </Card>
  )
}

export default SearchProducts