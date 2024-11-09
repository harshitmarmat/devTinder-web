import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    initialState : null,
    name : "requests",
    reducers : {
        addRequest : (state,actions) => { console.log("hii");
         return actions.payload},
        removeRequest : (state,actions) => null
    }
})


export const {addRequest,removeRequest} = requestSlice.actions

export default requestSlice.reducer