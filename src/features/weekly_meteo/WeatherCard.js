import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { IconWeather } from './IconWeather'
import { Day } from './Day'
import { Temp } from './Temp'
import { buttonIndex } from './meteoSlice'

export const WeatherCard = ({day, index}) => {
  const [isActive, setActive] = useState(false);
  const dispatch = useDispatch()
  const toggleClass = () => {

    const matche = document.querySelector(".small_card_active");

    if ( matche !== null){

      matche.classList.remove("small_card_active");
      matche.classList.add("small_card");
      setActive(!isActive);
      dispatch(buttonIndex({index}))
    } else {
      setActive(!isActive);
      dispatch(buttonIndex({index}))
    }
  };

  return (
      <div className={isActive ? "small_card_active": "small_card"} onClick={toggleClass}>
        <Day day={day}/>
        <IconWeather day={day}/>
        <Temp day={day}/>
      </div>
    )
}
