import { Card, CardContent, Divider, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function CustomerList( { name, account,id } ) {
    const navigate = useNavigate();
  return (
      <>
          <Divider />
          
          <Card onClick={()=>navigate(`/Customers/${name}/${id}`)}>
              <CardContent>
                  <Typography variant='h5'>Name:{name}</Typography>
                  <Typography variant='h6'>Debt:{account}</Typography>
              </CardContent>
          </Card>
          
      </>
  )
}

export default CustomerList