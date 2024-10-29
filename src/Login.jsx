import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("Harshit@gmail.com");
  const [password, setPassword] = useState("Harshit@123");

  const handleLogin = async() => {
    const res  = await axios.post('http://localhost:7777/login',{
      email,password
    },{
      withCredentials:true
    })
  }



  return (
    <div className="flex justify-center my-10">
      <div className="card  bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mx-auto">Login</h2>
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
          <div className="card-actions justify-center">
            <button onClick={handleLogin} className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
