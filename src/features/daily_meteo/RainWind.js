import React from 'react'

export const RainWind = ({day}) => {
  const humidity = day["main"]["humidity"] + " %"
  const wind = day["wind"]["speed"] + " noeud"
  return (
    <div className="humidity_wind">
      <div className="humidity"><span>Humidity {humidity}</span></div>
      <div className="wind"><span>{wind}</span></div>
    </div>
  )
}
