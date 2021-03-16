import React from 'react'

export const IconWeather = ({day}) => {

const url =  "http://openweathermap.org/img/w/" + day["weather"][0]["icon"] + ".png"

return (
    <div>
        <img src= {url} alt='Icon depicting current weather.'/>
    </div>
  )
}
