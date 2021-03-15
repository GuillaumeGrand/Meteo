import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMeteo1 = createAsyncThunk('meteo/fetchMeteo1', async (city) => {
  const response = await axios.get("https://community-open-weather-map.p.rapidapi.com/forecast?q=" + city, {
 headers: {
   "x-rapidapi-key": "30a3d438b3msha8c257201c60444p128cd5jsn0dd5c6bec950",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
 }
})
  return response["data"]
})
