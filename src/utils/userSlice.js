import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../config/axiosInstance";

export const authUser = createAsyncThunk(
  "/user/auth",
  async (data, { rejectWithValue }) => {
    try {
      let res;
      if (data.type === "signup") {
        res = await axiosInstance.post("/signup", data.user);
      } else {
        res = await axiosInstance.post("/login", data.user);
      }
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const userProfile = createAsyncThunk(
  "/user/profile", 
  async (_ , {rejectWithValue}) => {
    try {
      const res = await axiosInstance.get("/profile/view")
      return res.data
    }
    catch (err) {
      return rejectWithValue(err.message);
    }
  }
)

export const editProfile = createAsyncThunk(
  "/user/edit",
  async (data, {rejectWithValue }) => {
    try {
      const res = await axiosInstance.patch(
        "/profile/edit",
        data
      );
      return res.data
    }
    catch (err) {
      rejectWithValue(err.message)
    }
  }
)

export const logoutHandlerThunk = createAsyncThunk(
  "/user/logout",
  async (_, {rejectWithValue }) => {
    try {
      await axiosInstance.post('/logout',{});
      return;
    }
    catch(err) {
      rejectWithValue(err.message)
    }
  }
)

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authUser.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(authUser.rejected, (state, action) => {
        return null;
      })
      .addCase(userProfile.fulfilled, (state,action)=> {
        return action.payload
      })
      .addCase(editProfile.fulfilled,(state,action) => {
        return action.payload.data
      })
      .addCase(logoutHandlerThunk.fulfilled,(state,action)=>{
        return null
      })
      .addCase(logoutHandlerThunk.rejected,(state,action)=> {
        return 
      })
  },
});


export default userSlice.reducer;
