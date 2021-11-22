import { createSlice } from "@reduxjs/toolkit";

export const userIndexSlice = createSlice({
    name: 'userIndex',
    initialState: {value: null},    
    reducers: {
        update: (state,action) => {
            state.value = action.payload
        }
    }
})

export const { update } = userIndexSlice.actions
export default userIndexSlice.reducer