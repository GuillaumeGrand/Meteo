import { createSlice } from '@reduxjs/toolkit'
import { fetchMeteo1 } from '../../api/request'

const initialState = {
  city1: ["test1"],
  status: 'idle',
  error: null
}


export const meteoSlice = createSlice({
  name: 'meteo',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMeteo1.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.city1 = []
      state.city1.push(action.payload)
    },
    [fetchMeteo1.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchMeteo1.rejected]: (state, action) => {
      state.status = 'failed'
    },
  }
})

// export const { increment, decrement } = meteoSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.meteo.value)`
export const selectCity1 = state => state.meteo.city1;

export default meteoSlice.reducer;

export const weatherData1 = (state) => state.meteo.city1[0].list
