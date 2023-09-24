import React, { useEffect } from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";


const Watchpage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"))

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(closeMenu());
    })
    return (
        <div>
          <div className="px-5">
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
            <div>
                live chat
            </div>
            
          </div>
          <CommentsContainer />
        </div>
    )
}

export default Watchpage;