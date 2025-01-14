import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL } from "./constants";



export const requestHandlerThunk = createAsyncThunk(
  "/requests/handle",
  async (_, {rejectWithValue}) => {
    try {
      const res = await axios.get(BASEURL + "/user/requests/received", {
        withCredentials: true,
      });
      return res?.data?.data
    }
    catch(err) {
      rejectWithValue(err.message);
    }
  }
)

export const requestAction = createAsyncThunk(
  "/requests/action",
  async ({status,_id} , {rejectWithValue})=> {
    try {
      const res = await axios.post(BASEURL + "/request/review/" +status +"/" + _id,{},{withCredentials :true});
      return _id
    }
    catch (err){
      rejectWithValue(err.message)
    }
  }
)

const requestSlice = createSlice({
  initialState: null,
  name: "requests",
  reducers: {},
  extraReducers : ( builder ) => {
    builder.addCase(requestHandlerThunk.fulfilled,(state,actions) => actions.payload)
    .addCase(requestHandlerThunk.rejected, (state,actions)=> null)
    .addCase(requestAction.fulfilled,(state,actions)=>{
      const newArray = state.filter((r) => r._id !== actions.payload);
      return newArray;
    })
    .addCase(requestAction.rejected, (state,actions)=> null)
  }
});


export default requestSlice.reducer;
