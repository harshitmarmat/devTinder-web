import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASEURL } from "../utils/constants";
import { addConnection } from "../utils/connectionSlice";
import ChatInbox from "./chat/ChatInbox";
import { addMessage, pushMessage } from "../utils/messageSlice";

const ConnectionCard = ({ user, index, changeActive,active }) => {
  const { firstName, lastName, photo, about, age, gender } = user;

  return (
    <div
      onClick={() => {
        console.log(index);
        changeActive(index);
      }}
      className={`cursor-pointer card card-compact ${active ?"bg-base-300":"bg-base-200"} w-96 shadow-xl my-2 p-4`}
    >
      <div className="flex items-center gap-3">
        <div className="avatar online">
          <div className="w-16 rounded-full">
            <img className="w-16" src={photo} />
          </div>
        </div>
        <div>
          <div className="font-bold">{firstName + " " + lastName}</div>
          {age && gender && (
            <div className="text-sm opacity-50">{age + ", " + gender}</div>
          )}
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
};

const Connection = () => {
  const dispatch = useDispatch();
  const connections = useSelector((state) => state.connections);
  const user = useSelector((state) => state.user);
  const message = useSelector((state) => state.message);
  const [text,setText] = useState("")

  const [active, setActive] = useState(null);
  const getConnections = async () => {
    try {
      const res = await axios.get(BASEURL + "/user/requests/connection", {
        withCredentials: true,
      });
      setActive(0);
      dispatch(addConnection(res?.data));
    } catch (err) {}
  };

  useEffect(() => {
    getConnections();
  }, []);

  const getMessage = async () => {
    console.log("hi");

    try {
      const res = await axios.get(BASEURL + "/chat/" + connections[active]?.conversationThread, {
        withCredentials: true,
      });
      console.log(res);

      dispatch(addMessage(res.data.chats));
    } catch (err) {}
  };

  useEffect(() => {
    getMessage();
  }, [active]);

  if (!connections) return null;

  if (connections.length === 0)
    return <h1 className="text-center my-10">No Connections.</h1>;

  console.log(connections);

  const sendMessage = async () => {
    try {
      const res = await axios.post(BASEURL + "/send/message/" + connections[active]?.conversationThread, {
        content: text,
        toUserId: connections[active]?.userData?._id,
      },{
        withCredentials: true
      });
      console.log(res);
      dispatch(pushMessage(res.data.data))
    } catch (err) {}
  };

  return (
    <div>
      <h1 className="text-3xl text-white my-6 text-center">Connections</h1>
      <div className="flex gap-6 justify-center">
        <div className="flex flex-col items-center">
          {connections.map((connection, i) => (
            <ConnectionCard
              changeActive={(num) => {
                setActive(num);
                console.log(num);
              }}
              key={connection?.userData?._id}
              index={i}
              user={connection.userData}
              active={active===i}
            />
          ))}
        </div>
        {message && (
          <div className="w-1/2 flex flex-col justify-end my-6">
            <ChatInbox messages={message} user={user} />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Type here"
                className="input w-full input-bordered "
                value={text}
                onChange={(e)=>setText(e.target.value)}
              />
              <button
                onClick={sendMessage}
                className="bg-blue-400 text-white px-4 rounded-md"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Connection;
