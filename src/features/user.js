import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {value: null},
    reducers: {
        findUser: (state,action) => {
            const users = action.payload.users
            const selectedUser = action.payload.selectedUser

            state.value = users.find(user => user.id == selectedUser)
        }
    }
})

export const { findUser,sendMessage } = userSlice.actions 
export default userSlice.reducer