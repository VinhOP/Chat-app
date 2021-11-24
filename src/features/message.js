import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";

export const messageSlice = createSlice({
    name: 'message',
    initialState: {value: null},
    reducers: {
        storeMessage: (state,action) => {
            const message = {
                id: uuidv4(),
                mes: action.payload.mes,
                createAt: moment(new Date()).format("dddd, h:mm:ss a"),
                userID: action.payload.userID,
            }
            state.value = message
        }
    }
})

export const { storeMessage } = messageSlice.actions
export default messageSlice.reducer
