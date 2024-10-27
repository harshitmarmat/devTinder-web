import { useState } from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";
import Profile from "./Profile";
import Login from "./Login";
import Feed from "./Feed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route element={<Profile />} path="profile" />
          <Route element={<Login />} path="/login" />
          <Route element={<Feed />} path="/feed" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
