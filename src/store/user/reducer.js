import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: {
        1: {
            id: 1,
            name: 'Nam',
        },
        2: {
            id: 2,
            name: 'Hoang',
        },
        3: {
            id: 3,
            name: 'Tuyet',
        },
    },
    userSelected: null,
    myID: 0
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setSelectedUser: (state,action) => {
            const {id} = action.payload

            return {
                ...state,
                userSelected: state.users[id]
            }
        }
    }
})

export const { setSelectedUser } = userSlice.actions
export default userSlice.reducer