import React from 'react';
import { useSelector } from 'react-redux'
import { weatherData1 } from './meteoSlice'
import { WeatherCard } from './WeatherCard'

import 'weather-react-icons/lib/css/weather-icons.css';


export function WeeklyWeather() {
const stateValue = useSelector((state) => weatherData1(state))
const fetchMeteo1Status = useSelector((state) => state.meteo.status)


let cards = []

if (fetchMeteo1Status === 'idle') {
  cards = "Choisissez une ville"
} else if (fetchMeteo1Status === 'succeeded') {
    const  weatherDay = [];
    weatherDay.push(stateValue[0])
    weatherDay.push(stateValue[7])
    weatherDay.push(stateValue[15])
    weatherDay.push(stateValue[23])
    weatherDay.push(stateValue[31])

  weatherDay.forEach((element, index) => {

    cards.push(
        <WeatherCard day={element} key={index} index={index} />
    )
  });
}

  return (
      <div className="container_weekly" >
        {cards}
      </div>
  );
}
