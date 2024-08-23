import React from 'react'

interface card{
    date:String,
    plans:String,
    rate:String
}

const PlanCard:React.FC<card> = ({date,plans,rate}) => {
  return (
    <div className="text-center w-32">
    <p className="text-4xl font-bold">{date}</p>
    <p className="text-4xl">{plans}</p>
    <p className="mt-2">{rate}</p>
  </div>
  )
}

export default PlanCard