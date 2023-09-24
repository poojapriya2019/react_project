import React from "react";

const ChatMessage = ({ name, msg}) => {
    return (
        <div className="flex items-center">
            <img className="h-5"
              alt="chat-usr-icon"
              src="https://e7.pngegg.com/pngimages/167/774/png-clipart-laptop-user-personal-computer-laptop-electronics-child-thumbnail.png"
            />
            <span className="p-1">{name}</span>
            <span className="p-1">{msg}</span>
        </div>
    )
}

export default ChatMessage;