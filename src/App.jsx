import { useState } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Feed from "./components/Feed";
import { Provider } from "react-redux";
import { store } from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route element={<Feed />} path="/" />
            <Route element={<Profile />} path="profile" />
            <Route element={<Login />} path="/login" />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
