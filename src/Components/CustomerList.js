import { Card, CardContent, Divider, Typography } from '@mui/material'
import React from 'react'

function CustomerList({name,account}) {
  return (
      <>
          <Divider/>
          <Card>
              <CardContent>
                  <Typography variant='h5'>Name:{name}</Typography>
                  <Typography variant='h6'>Debt:{account}</Typography>
              </CardContent>
          </Card>
          
      </>
  )
}

export default CustomerList