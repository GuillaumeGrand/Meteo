import { configureStore } from '@reduxjs/toolkit';
import meteoReducer from '../features/weekly_meteo/meteoSlice';

export default configureStore({
  reducer: {
    meteo: meteoReducer,
  },
});
