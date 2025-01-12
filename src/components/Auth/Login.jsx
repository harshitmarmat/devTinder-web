import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authUser  } from "../../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("Harshit@gmail.com");
  const [password, setPassword] = useState("Harshit@123");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => { 
    dispatch(
      authUser({
        type: "login",
        user: { email, password },
      })
    );
    navigate("/");
  };

  const handleSignUp = () => {
    dispatch(
      authUser({
        type: "signup",
        user: {
          firstName,
          lastName,
          email,
          password,
        },
      })
    );
    navigate("/profile");
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card  bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mx-auto">
            {isLogin ? "Login" : "Sign up"}
          </h2>
          {!isLogin && (
            <>
              <label className="form-control w-full my-2 max-w-xs">
                <div className="label">
                  <span className="label-text">First Name:</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full my-2 max-w-xs">
                <div className="label">
                  <span className="label-text">Last Name:</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </>
          )}
          <label className="form-control w-full my-2 max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full my-2 max-w-xs">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <p className=" text-red-500">{error}</p>
          <div className="card-actions justify-center">
            <button
              onClick={isLogin ? handleLogin : handleSignUp}
              className="btn btn-primary"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </div>
          <p
            onClick={() => setIsLogin((prev) => !prev)}
            className="cursor-pointer text-center"
          >
            {isLogin ? "New User? Sign up" : "Already Registered? Login"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
