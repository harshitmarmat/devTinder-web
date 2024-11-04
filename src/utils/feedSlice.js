import { createSlice } from "@reduxjs/toolkit";

const FeedSlice = createSlice({
    name : "Feed",
    initialState : null,
    reducers : {
        addFeed:(state,actions) => actions.payload,
        removeFeed : (state,actions) =>  null
    }
})

export const { addFeed,removeFeed } = FeedSlice.actions

export default FeedSlice.reducer;