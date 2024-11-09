import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASEURL } from "../utils/constants";
import { addConnection } from "../utils/connectionSlice";



const ConnectionCard = ({user}) => {

  const {firstName, lastName , photo, about,age,gender} = user

  return (<div className="card card-compact bg-base-300 w-96 shadow-xl my-2 p-4">
    <div className="flex items-center gap-3">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img
            className="w-16"
            src={photo}
          />
        </div>
      </div>
      <div>
        <div className="font-bold">{firstName +" " +lastName}</div>
        {age && gender && <div className="text-sm opacity-50">{age +", "+ gender}</div>}
        <p>{about}</p>
      </div>
    </div>
  </div>)
}

const Connection = () => {
  const dispatch = useDispatch();
  const connections = useSelector(state=> state.connections);

  const getConnections = async () => {
    try {
      const res = await axios.get(BASEURL + "/user/requests/connection", {
        withCredentials: true,
      });
      
      dispatch(addConnection(res?.data));
    } catch (err) {}
  };

  useEffect(() => {
    getConnections();
  }, []);

  console.log(connections);
  
  if(!connections) return null;

  if(connections.length===0) return <h1>No Connections.</h1>

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl text-white my-6">Connections</h1>
      {connections.map((connection)=> 
        <ConnectionCard key={connection?._id} user={connection}/>
      )}
    </div>
  );
};

export default Connection;
