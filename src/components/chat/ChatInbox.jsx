import React from "react";

const ChatInbox = ({ messages, user }) => {
  return (
    <div className="overflow-scroll h-[60vh]">
      {messages?.map((message) => {
        return (
          <div
          key={message._id}
            className={`chat ${
              message.sender._id === user._id ? "chat-end" : "chat-start"
            }`}
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src={message?.sender.photo}
                />
              </div>
            </div>
            <div className="chat-header">
              {message?.sender.firstName}
              {/* <time className="text-xs opacity-50">12:46</time> */}
            </div>
            <div className="chat-bubble">{message.content}</div>
            {/* <div className="chat-footer opacity-50">Seen </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default ChatInbox;
