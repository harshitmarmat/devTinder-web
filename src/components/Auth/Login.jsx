import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import { BASEURL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("Harshit@gmail.com");
  const [password, setPassword] = useState("Harshit@123");
  const [error,setError] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogin = async() => {
    try{
      const res  = await axios.post(BASEURL+'/login',{
        email,password
      },
      {
        withCredentials:true
      }
    );
      dispatch(addUser(res.data));
      navigate('/')
    }
    catch(err){
      console.error("Error in login : ",err);
      setError(err?.response?.data || " Something went wrong.")
    }
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
          <p className=" text-red-500">{error}</p>
          <div className="card-actions justify-center">
            <button onClick={handleLogin} className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
