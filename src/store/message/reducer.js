import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"
import moment from "moment"

const initialState = {
    messages: {
        1: [{
            id: uuidv4(),
            message: 'OK con de',
            createAt: moment(new Date()).format("dddd, h:mm:ss a"),
            userID: 1
        }],
        2: [{
            id: uuidv4(),
            message: 'hello AAASSS',
            createAt: moment(new Date()).format("dddd, h:mm:ss a"),
            userID: 2
        }],
        3: [{
            id: uuidv4(),
            message: 'TESTINGGGGGG',
            createAt: moment(new Date()).format("dddd, h:mm:ss a"),
            userID: 3
        }]
    }
}

export const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        addMessage: (state,action) => {
            const { userID, myID, message } = action.payload
            const newMessage = {
                id: uuidv4(),
                message: message,
                createAt: moment(new Date()).format("dddd, h:mm:ss a"),
                userID: myID
            }

            return {
                ...state,
                messages: {
                    ...state.messages,
                    [userID]: [...state.messages[userID], newMessage]
                }
            }
        }
    }
})

export const { addMessage } = messageSlice.actions
export default messageSlice.reducer