import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  initialState: null,
  name: "requests",
  reducers: {
    addRequest: (state, actions) => {
      return actions.payload;
    },
    removeRequest: (state, actions) => {
      const newArray = state.filter((r) => r._id !== actions.payload);
      return newArray;
    },
  },
});

export const { addRequest, removeRequest } = requestSlice.actions;

export default requestSlice.reducer;
