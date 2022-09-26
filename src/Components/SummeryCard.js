import { Typography } from '@mui/material'
import { CardContent } from '@mui/material'
import { Card } from '@mui/material'
import React from 'react'
import RefreshIcon from '@mui/icons-material/Refresh';

function SummeryCard() {
  return (
      <>
          <Card>
              <CardContent>
                  <Typography variant='h6'>6Kg</Typography>
                  <RefreshIcon/>
              </CardContent>
          </Card>
      </>
  )
}

export default SummeryCard