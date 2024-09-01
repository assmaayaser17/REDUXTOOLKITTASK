import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice.js'

export const storeApp = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

