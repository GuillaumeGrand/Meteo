import React from 'react'

export const Day = ({day}) => {
  const week = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
  const newday = new Date(day["dt_txt"])

  const num_day = newday.getDay();
  
  return (
      <div>
          <div className="day">{ week[num_day]}</div>
      </div>
    )
}
