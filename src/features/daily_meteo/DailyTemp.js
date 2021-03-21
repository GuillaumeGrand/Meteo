import React from 'react'

export const DailyTemp = ({day}) => {
  const temp_max = Math.round(day["main"]["temp_max"] - 273.15)

  return (
    <div className="daily_temp">
      <div className="daily_max_temp"><span>{temp_max}</span>°</div>
    </div>
    )
}
