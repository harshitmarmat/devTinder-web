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
      const response = await dispatch(userProfile()).unwrap();
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
