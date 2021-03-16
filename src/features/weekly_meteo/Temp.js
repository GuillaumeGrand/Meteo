import React from 'react'

export const Temp = ({day}) => {
  const temp_max = Math.round(day["main"]["temp_max"] - 273.15)
  const temp_min = Math.round(day["main"]["temp_min"] - 273.15)

  return (
    <div className="card_temp">
      <div className="temp_max"><span>{temp_max}</span>°</div>
      <div className="temp_min"><span>{temp_min}</span>°</div>
    </div>
    )
}
