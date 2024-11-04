import React from "react";

const UserCard = ({user}) => {

    const {firstName, lastName , age , about, photo , gender} = user;

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl mx-auto my-10">
      <figure>
        <img
          src={photo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName +" "+ lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Ignored</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;