import React from 'react'

export const Address = ({day, objet}) => {
const city = objet[0]["city"]["name"]
const date = day["dt_txt"]
const weather_left = day["weather"][0]["description"]

  return (
    <div className="humidity_wind">
      <div className="city"><span>{city}</span></div>
      <div className="date"><span>{date}</span></div>
      <div className="wheather_left"><span>{weather_left}</span></div>
    </div>
  )
}
