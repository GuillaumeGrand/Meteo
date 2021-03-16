import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMeteo1 } from '../../api/request'

import {WeeklyWeather } from './WeeklyWeather';

export function Meteo() {
  const [city_1, setCity_1] = useState('')
  const onCity1Changed = (e) => setCity_1(e.target.value)

  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <div className="city_1">
        <div className="weather_card">
            <WeeklyWeather />
        </div>
        <input
          type="text"
          id="meteoCity1"
          name="meteoCity"
          placeholder="Choose City"
          value={city_1}
          onChange={onCity1Changed}
        />
          <div className="button_api" onClick={() => dispatch(fetchMeteo1(city_1))}>
            Meteo
          </div>
      </div>
    </div>
  );
}
