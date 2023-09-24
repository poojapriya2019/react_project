import React, { useEffect } from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";


const Watchpage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"))

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(closeMenu());
    })
    return (
        <div className="w-full">
          <div className="px-5  flex w-full">
            <div>
                <iframe width="650" 
                height="400" 
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; 
                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
                web-share" allowfullscreen></iframe>
            </div>
            
            <div className="w-full">
            <div className="font-bold p-2">Live Chat</div>
                <LiveChat />
            </div>
            
          </div>
          <CommentsContainer />
        </div>
    )
}

export default Watchpage;