import { createSlice } from "@reduxjs/toolkit";

export const selectedUserSlice = createSlice({
    name: 'selectedUser',
    initialState: {value: null},    
    reducers: {
        updateSelectedUser: (state,action) => {
            state.value = action.payload
        }
    }
})

export const { updateSelectedUser } = selectedUserSlice.actions
export default selectedUserSlice.reducer