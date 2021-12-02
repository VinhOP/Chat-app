import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"
import moment from "moment"

const initialState = {
    messages: {
    1: [{
        id: uuidv4(),
        message: 'OK con de',
        deleted: false,
        createAt: moment(new Date()).format("dddd, h:mm:ss a"),
        userID: 1
    }],
    2: [{
        id: uuidv4(),
        message: 'hello AAASSS',
        deleted: false,
        createAt: moment(new Date()).format("dddd, h:mm:ss a"),
        userID: 2
    }],
    3: [{
        id: uuidv4(),
        message: 'TESTINGGGGGG',
        deleted: false,
        createAt: moment(new Date()).format("dddd, h:mm:ss a"),
        userID: 3
    }],
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
                deleted: false,
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
        },

        deleteMes: (state,action) => {
            const {userID, mesID} = action.payload
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [userID]: state.messages[userID].map(msg => {
                        if(mesID == msg.id) {
                            return {
                                ...msg,
                                deleted: true
                            }
                        }
                        return msg
                    })
                }
            }
        }
    }
})

export const { addMessage, deleteMes } = messageSlice.actions
export default messageSlice.reducer