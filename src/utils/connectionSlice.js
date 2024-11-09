import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
    initialState : null ,
    name : "connections",
    reducers : {
        addConnection: (state,actions)=> {
            return actions.payload
        },
        removeConnection: (state, actions) =>{
            return null
        }
    }
})

export const { addConnection, removeConnection } = connectionSlice.actions

export default connectionSlice.reducer