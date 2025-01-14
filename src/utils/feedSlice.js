import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL } from "./constants";

export const feedFetch = createAsyncThunk(
  "/feed/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(BASEURL + "/user/feed", {
        withCredentials: true,
      });
      return res.data;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

export const feedApprove = createAsyncThunk(
  "/feed/request",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        BASEURL + "/request/send/" + data.status + "/" + data._id,
        {},
        { withCredentials: true }
      );
      return res.data;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

const FeedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(feedFetch.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(feedFetch.rejected, (state, action) => {
        return null;
      })
      .addCase(feedApprove.fulfilled, (state, action)=> {
        const newArray = state.filter((u) => u._id !== action.payload);
        return newArray;
      })
      .addCase(feedApprove.rejected, (state, action) => {
        return null;
      })
  },
});

export const { addFeed, removeFeed } = FeedSlice.actions;

export default FeedSlice.reducer;
