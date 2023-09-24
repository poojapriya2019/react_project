import React, { useEffect } from "react";
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { randomNameGenerate, randomTextGenerate } from "../utils/helper";

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessage = useSelector((store) => store.chat.messages);
    useEffect(() => {
      const t = setInterval(() => {
         console.log("Api polling");
         dispatch(addMessage({
            name: randomNameGenerate(),
            message: randomTextGenerate(20)
         }))
      }, 500)

      return () => clearInterval(t);
    }, [])
    
    return (
        <div className="w-full h-[360px] ml-2 p-2 border border-black bg-slate-100 rounded-lg shadow-sm overflow-y-scroll flex flex-col-reverse">
            {
            //   Disclaimer: Don't use indexes as key
              chatMessage.map((chat, index) => (
                <ChatMessage key={index} name={chat.name} msg={chat.message}/>
              ))
            }
            
        </div>
    )
}

export default LiveChat;