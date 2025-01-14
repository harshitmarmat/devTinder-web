import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL } from "./constants";

export const connectionHandler = createAsyncThunk(
  "/connections/add",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(BASEURL + "/user/requests/connection", {
        withCredentials: true,
      });

      return res.data
    } catch (err) {
        console.log("error in connectionHandler thunk :",err);
        rejectWithValue(err.message);
    }
  }
);

const connectionSlice = createSlice({
  initialState: null,
  name: "connections",
  reducers: {},
  extraReducers : (builder) => {
    builder.addCase(connectionHandler.fulfilled,(state,action)=>action.payload)
    .addCase(connectionHandler.rejected,(state,action)=> null)
  }
});


export default connectionSlice.reducer;
