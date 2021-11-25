import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/reducer'
import messageReducer from './message/reducer'

export const store = configureStore({
    reducer: {
      user: userReducer,
      message: messageReducer,
    }
})