import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice"
import feedReducer from "./feedSlice"
import connectionsReducer from "./connectionSlice"
import requestReducer from "./requestSlice"


export const store = configureStore({
  reducer : {
    user: userReducer,
    feed : feedReducer,
    connections : connectionsReducer,
    requests : requestReducer
  }
})