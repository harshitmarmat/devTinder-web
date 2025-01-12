import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { io } from "socket.io-client";
import { pushMessage } from "../utils/messageSlice";

const URL = "http://localhost:7777/";

const useSocket = () => {
  const dispatch = useDispatch()
  const socket = io(URL, {
    withCredentials: true,
  });

  useEffect(() => {
    socket.emit("register");
  }, []);

  useEffect(() => {
    //get logic
    socket.on("recieveMessage",(data)=> {
      console.log(data);
      dispatch(pushMessage(data))
    })
  }, [socket]);

  const sendData = (data) => {
    socket.emit("sendMesssage",data)
  };

  return { sendData };
};

export default useSocket;
