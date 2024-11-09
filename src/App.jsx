import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Layout/Body";
import Profile from "./components/profile/Profile";
import Login from "./components/Auth/Login";
import Feed from "./components/Feed";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import Connection from "./components/Connection";
import Request from "./components/Request";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route element={<Login />} path="/login" />
            <Route element={<Profile />} path="profile" />
            <Route element={<Feed />} path="/" />
            <Route element={<Connection />} path="/connection" />
            <Route element={<Request />} path="/request" />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
