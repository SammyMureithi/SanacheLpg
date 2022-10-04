import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

function CustomerList({name,account}) {
  return (
      <>
          <Card>
              <CardContent>
                  <Typography variant='h5'>Name:{name}</Typography>
                  <Typography variant='h6'>Account:{account}</Typography>
              </CardContent>
          </Card>
          
      </>
  )
}

export default CustomerList