import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import {  userProfile } from "../../utils/userSlice";
import { useDispatch } from "react-redux";

const Body = () => {
  const dispatch = useDispatch() 
  const navigate = useNavigate()

  const fetchProfile = async() => {
    try { 
      await dispatch(userProfile()).unwrap();
    } catch (err) {
      console.error("Error in getting profile data.",err.message)      
      navigate('/login')
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
