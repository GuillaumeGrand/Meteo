import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { weatherData1 } from './meteoSlice'

import 'weather-react-icons/lib/css/weather-icons.css';


export function WeeklyWeather() {
const [isActive, setActive] = useState(false);
const stateValue = useSelector((state) => weatherData1(state))
const fetchMeteo1Status = useSelector((state) => state.meteo.status)

const toggleClass = () => {
  setActive(!isActive);
}

let cards = []

if (fetchMeteo1Status === 'idle') {
    cards.push(<div><img src= "http://openweathermap.org/img/w/01n.png" alt='Icon depicting current weather.'/></div>)
} else if (fetchMeteo1Status === 'succeeded') {
    const  weatherDay = [];
    weatherDay.push(stateValue[0])
    weatherDay.push(stateValue[7])
    weatherDay.push(stateValue[15])
    weatherDay.push(stateValue[23])
    weatherDay.push(stateValue[31])


  const list = weatherDay.map(day => "http://openweathermap.org/img/w/" + day["weather"][0]["icon"] + ".png")
  const urlicons = []
  list.forEach((url) => {
  urlicons.push(<img src= {url} alt='Icon depicting current weather.'/>)
  })

  weatherDay.forEach((element, index) => {
    const week = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
    const icon = urlicons[index];
    const temp_max = Math.round(element["main"]["temp_max"] - 273.15)
    const temp_min = Math.round(element["main"]["temp_min"] - 273.15)
    const newday = new Date(element["dt_txt"])
    const day = newday.getDay();

    cards.push(
      <div className={isActive ? 'small_card_active': "small_card"} key={index} onClick={toggleClass}>
        <div>{ week[day]}</div>
        <div>{icon}</div>
        <div className="card_temp">
          <div><span>{temp_max}</span>°</div>
          <div><span>{temp_min}</span>°</div>
        </div>
      </div>
    )
  });
}

  return (
      <div className="container_weekly" >
        {cards}
      </div>
  );
}
