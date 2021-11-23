import {configureStore} from '@reduxjs/toolkit'
import usersReducer from './users'
import userIndexReducer from './userIndex'

export const store = configureStore({
    reducer: {
      users: usersReducer,
      userIndex: userIndexReducer,
    }
})