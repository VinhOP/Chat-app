import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './users'
import userReducer from './user'
import messageReducer from './message'
import selectedUserReducer from './selectedUser'

export const store = configureStore({
    reducer: {
      users: usersReducer,
      user: userReducer,
      message: messageReducer,
      selectedUser: selectedUserReducer
    }
})