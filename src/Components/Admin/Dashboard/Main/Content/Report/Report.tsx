import React from 'react'
import DateCheck from './DateCheck'
import PaymentsHistroy from './PaymentsHistroy'

const Report = () => {
  return (
    <div className="p-6 bg-loginbgcolor min-h-screen">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-4">Sales Report</h1>
      {/* <DateCheck/> */}
      <PaymentsHistroy/>
    </div>
  </div>
  )
}

export default Report