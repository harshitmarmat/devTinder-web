import axios from "axios";
import React from "react";
import { BASEURL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../../utils/feedSlice";

const UserCard = ({ user }) => {
  const { firstName, lastName, age, about, photo, gender,_id} = user;
  const dispatch = useDispatch();
  const feedHandler = async(status) => {
    try {
      const res = await axios.post(
        BASEURL + "/request/send/" + status +"/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeFeed(_id))
    } catch (err) {}
  };

 
  return (
    <div className="card card-compact bg-base-300 w-96 shadow-xl  my-10">
      <figure>
        <img src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center">
          <button onClick={()=>feedHandler("ignored")} className="btn btn-primary">Ignored</button>
          <button onClick={()=>feedHandler("interested")} className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
