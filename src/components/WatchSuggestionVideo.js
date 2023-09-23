import React from "react";
import { useSearchParams } from "react-router-dom";


const WatchSuggestionVideo = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("search_query"))
    return (
        <div className="px-5">
            <iframe width="800" 
            height="500" 
            src={"https://www.youtube.com/embed/" + searchParams.get("search_query")}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
             web-share" allowfullscreen></iframe>
        </div>
    )
}

export default WatchSuggestionVideo;