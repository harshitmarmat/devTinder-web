import axios from "axios";
import React, { useEffect } from "react";
import { BASEURL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";

const RequestCard = ({ user }) => {
  const { firstName, lastName, photo, about, age, gender } = user;

  return (
    <div className="card card-compact bg-base-300 w-[450px] shadow-xl my-2 p-4">
      <div className="flex justify-between items-center gap-3">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img className="w-12" src={photo} />
          </div>
        </div>
        <div>
          <div className="font-bold">{firstName + " " + lastName}</div>
          {/* {age && gender && (
            <div className="text-sm opacity-50">{age + ", " + gender}</div>
          )} */}
          <p>{about}</p>
        </div>
        <div className="flex gap-4 ml-8">
          <button className="btn btn-primary">Reject</button>
          <button className="btn btn-secondary">Accept</button>
        </div>
      </div>
    </div>
  );
};

const Request = () => {
  const dispatch = useDispatch();
  const requests = useSelector(state=>state.requests)
  const getRequest = async () => {
    try {
      const res = await axios.get(BASEURL + "/user/requests/received", {
        withCredentials: true,
      });
      console.log(res);
      dispatch(addRequest(res?.data?.data));
    } catch (err) {}
  };

  useEffect(() => {
    getRequest();
  }, []);

  if(!requests) return null;

  if(requests.length===0) return <h1>No Requests.</h1>


  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl text-white my-6">Requests</h1>
      {requests.map((request) => (
        <RequestCard key={request._id} user={request?.fromUserId} />
      ))}
    </div>
  );
};

export default Request;
