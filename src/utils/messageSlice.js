import { createSlice } from "@reduxjs/toolkit";


const messageSlice = createSlice({
    initialState : null,
    name : "message",
    reducers : {
        addMessage : (state, actions) => {
            return actions.payload
        },
        removeMessage : (state,actions) => {
            return null;
        },
        pushMessage : (state,actions) => {
            const newArray = [...state];
            newArray.push(actions.payload)            
            return newArray
        }
    }
})


export const { addMessage, removeMessage, pushMessage} = messageSlice.actions

export default messageSlice.reducer