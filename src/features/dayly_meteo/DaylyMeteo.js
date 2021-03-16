import React from 'react';
import { Day } from '../weekly_meteo/Day'
import { IconWeather } from '../weekly_meteo/IconWeather'
import { RainWind } from './RainWind'
import { Address } from './Address'
import { useSelector } from 'react-redux'
import { weatherData } from '../weekly_meteo/meteoSlice'
import { dayIndex } from '../weekly_meteo/meteoSlice'

export function DaylyMeteo() {
  const btn_index = useSelector((state) => dayIndex(state))
  const stateValue = useSelector((state) => weatherData(state))
  const fetchMeteo1Status = useSelector((state) => state.meteo.status)

  const left_day = []
  const rigth_day = []
  const index = (btn_index["index"] === 0) ? 0 : btn_index["index"] * 8 - 1

  if (fetchMeteo1Status === 'idle') {
  } else if (fetchMeteo1Status === 'succeeded') {
    const day = stateValue[0].list[index]
    
    left_day.push(<IconWeather day={day} className="icon_right"/>)
    left_day.push(<Day day={day} className="day_right"/>)
    left_day.push(<RainWind day={day} className="RainWind"/>)
    rigth_day.push(<Address day={day} objet={stateValue} className="left_address"/>)
  }

  return (
      <div className="container_dayly" >
        <div className="left_dayly">
          {left_day}
        </div>
        <div className="right_dayly">
          {rigth_day}
        </div>
      </div>
  );
}
