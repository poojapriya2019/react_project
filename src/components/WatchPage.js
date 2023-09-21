import React, { useEffect } from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";


const Watchpage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"))

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(closeMenu());
    })
    return (
        <div className="px-5">
            <iframe width="800" 
            height="500" 
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
             web-share" allowfullscreen></iframe>
        </div>
    )
}

export default Watchpage;