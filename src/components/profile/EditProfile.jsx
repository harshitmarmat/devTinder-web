import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editProfile } from "../../utils/userSlice";
import UserCard from "../common/UserCard";
import Toast from "../common/Toast";

const EditProfile = ({ userDetail }) => {
  const [firstName, setFirstName] = useState(userDetail.firstName);
  const [lastName, setLastName] = useState(userDetail.lastName);
  const [photo, setPhoto] = useState(userDetail.photo);
  const [age, setAge] = useState(userDetail.age);
  const [gender, setGender] = useState(userDetail.gender);
  const [about, setAbout] = useState(userDetail.about);
  const [err, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  const saveProfile = async () => {
    try {
      setError("");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
      dispatch(
        editProfile({
          firstName,
          lastName,
          photo,
          age,
          gender,
          about,
        })
      );
    } catch (err) {
      console.log(err);

      setError(err?.response?.data);
    }
  };

  return (
    <div className="flex pb-12 justify-center gap-8">
      <div>
        <div className="card  bg-base-300 w-96 my-10 shadow-xl">
          <div className="card-body">
            <h2 className="card-title mx-auto">Edit Profile</h2>
            <label className="form-control w-full my-1 max-w-xs">
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
            <label className="form-control w-full my-1 max-w-xs">
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
            <label className="form-control w-full my-1 max-w-xs">
              <div className="label">
                <span className="label-text">Photo url:</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full my-1 max-w-xs">
              <div className="label">
                <span className="label-text">Age:</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>

            <label className="form-control w-full my-1 max-w-xs">
              <div className="label">
                <span className="label-text">Gender:</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full my-1 max-w-xs">
              <div className="label">
                <span className="label-text">About:</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>

            <p className=" text-red-500">{err}</p>
            <div className="card-actions justify-center">
              <button onClick={saveProfile} className="btn btn-primary">
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserCard user={userDetail} />
      {showToast && <Toast text={"Profile updated seccessfully"} />}
    </div>
  );
};

export default EditProfile;
