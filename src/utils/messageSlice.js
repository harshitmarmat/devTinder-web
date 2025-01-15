import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../config/axiosInstance";

export const fetchMessage = createAsyncThunk(
  "/message/fetchMessage",
  async (thread, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/chat/" + thread);
      return res.data.chats
    } catch (err) {
        console.log("Error in fetchMessage thunk :",err);
        rejectWithValue(err.message);
    }
  }
);

const messageSlice = createSlice({
  initialState: null,
  name: "message",
  reducers: {
    removeMessage: (state, actions) => {
      return null;
    },
    pushMessage: (state, actions) => {
      const newArray = [...state];
      newArray.push(actions.payload);
      return newArray;
    },
  },
  extraReducers : ( builder) => {
    builder.addCase(fetchMessage.fulfilled, (state,action)=> action.payload)
    .addCase(fetchMessage.rejected,(state,action)=> {return null})
  }
});

export const { removeMessage, pushMessage } = messageSlice.actions;

export default messageSlice.reducer;
