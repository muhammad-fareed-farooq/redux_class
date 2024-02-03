import { configureStore } from '@reduxjs/toolkit'
import User_Data from './Slice/User_Data'

export const store = configureStore({
  reducer: {

    counter:User_Data
  },
})
