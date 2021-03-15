import { configureStore } from '@reduxjs/toolkit';
import meteoReducer from '../features/meteo/meteoSlice';

export default configureStore({
  reducer: {
    meteo: meteoReducer,
  },
});
