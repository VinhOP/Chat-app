import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import moment, { Moment } from "moment";

const initialStateValue = [
        {
            id: 2,
            name: 'Nam',
            messages: [{
                id: uuidv4(),
                mes: 'OK con de',
                createAt: moment(new Date()).format("dddd, h:mm:ss a"),
                userID: 2,
            }]
        },
        {
            id: 3,
            name: 'Hoang',
            messages: [
                {
                    id: uuidv4(),
                    mes: 'hello AAASSS',
                    createAt:  moment(new Date()).format("dddd, h:mm:ss a"),
                    userID: 3,
                }
            ]
        },
        {
            id: 4,
            name: 'Tuyet',
            messages: [
                {
                    id: uuidv4(),
                    mes: 'TESTINGGGGGG',
                    createAt:  moment(new Date()).format("dddd, h:mm:ss a"),
                    userID: 4,
                }
            ]
        }
    ]

export const usersSlice = createSlice({
    name: 'users',
    initialState: initialStateValue,
    reducers: {
        sendMessage: (state,action)  => {
            const userIndex = action.payload.userIndex
            const user = state.find(user => user.id == userIndex)

            const message = {
                id: uuidv4(),
                mes: action.payload.mes,
                createAt: moment(new Date()).format("dddd, h:mm:ss a"),
                userID: action.payload.userID,
            }
            
            user.messages.push(message)
        },
    }
})

export const { sendMessage } = usersSlice.actions;
export default usersSlice.reducer;