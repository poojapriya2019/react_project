import React, { useEffect, useState } from "react";
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { randomNameGenerate, randomTextGenerate } from "../utils/helper";

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessage = useSelector((store) => store.chat.messages);
    useEffect(() => {
      const t = setInterval(() => {
         console.log("Api polling");
         dispatch(addMessage({
            name: randomNameGenerate(),
            message: randomTextGenerate(20)
         }))
      }, 2000)

      return () => clearInterval(t);
    }, [])
    
    return (
        <>
         <div className="w-full h-[360px] ml-2 p-2 border border-black bg-slate-100 rounded-lg shadow-sm overflow-y-scroll flex flex-col-reverse">
            <div>
                {
                //   Disclaimer: Don't use indexes as key
                chatMessage.map((chat, index) => (
                    <ChatMessage key={index} name={chat.name} msg={chat.message}/>
                ))
                }
            </div>
        </div>
        <form className="w-full p-2 ml-2 border border-black"
            onSubmit={(e) => {
                e.preventDefault();
                dispatch(addMessage({
                    name: "Pooja Priya",
                    message: liveMessage
                }))
                setLiveMessage("");
            }}>
            <input className="w-96 px-2"
              type="tex"
              value = {liveMessage}
              onChange={(e) => setLiveMessage(e.target.value)}
            />
            <button className="px-2 mx-2 bg-green-100"
               >Send</button>
        </form>
        </>
        
    )
}

export default LiveChat;