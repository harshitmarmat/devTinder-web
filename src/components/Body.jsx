import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Body = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const fetchProfile = async() => {
    try {
      const res = await axios.get('http://localhost:7777/profile/view',{
        withCredentials : true
      });
      dispatch(addUser(res.data));
    } catch (err) {
      if(err.status===401) {
        navigate('/login')
      }
      console.error("Error in getting profile data.")      
    }
  }

  useEffect(()=>{
    fetchProfile()
  },[])

  return (
    <div>
      <NavBar />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default Body;
