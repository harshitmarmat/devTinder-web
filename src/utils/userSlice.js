import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASEURL } from "./constants";
import axios from "axios";

export const authUser = createAsyncThunk(
  "/user/auth",
  async (data, { rejectWithValue }) => {
    try {
      let res;
      if (data.type === "signup") {
        res = await axios.post(BASEURL + "/signup", data.user, {
          withCredentials: true,
        });
      } else {
        res = await axios.post(BASEURL + "/login", data.user, {
          withCredentials: true,
        });
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
      const res = await axios.get(BASEURL + "/profile/view",{
        withCredentials : true
      })
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
      const res = await axios.patch(
        BASEURL + "/profile/edit",
        data,
        { withCredentials: true }
      );
      return res.data
    }
    catch (err) {
      rejectWithValue(err.message)
    }
  }
)

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    removeUser(state, action) {
      return null;
    },
  },
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
  },
});

export const { removeUser } = userSlice.actions;

export default userSlice.reducer;
