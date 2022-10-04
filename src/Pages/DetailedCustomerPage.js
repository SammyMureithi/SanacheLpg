import React from 'react'
import { useParams } from 'react-router-dom'

function DetailedCustomerPage() {
    const { CustomerName,CustomerId } = useParams();
  return (
      <div>DetailedCustomerPage {CustomerName}</div>
  )
}

export default DetailedCustomerPage