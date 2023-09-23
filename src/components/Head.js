import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { Link } from "react-router-dom";
const Head = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        // Call dispatch with the action function
        dispatch(toggleMenu()); 
    }
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    // const [hideSuggestions, setHideSuggestions] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => {
        getSearchSuggestions()
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }, [searchQuery]);
    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery, {
          method: 'GET',
          mode: 'cors'
        });
        const json = await data.json();
        setSuggestions(json[1]);
        console.log("API CALL" + searchQuery);
        console.log(json);
        console.log(suggestions);
    }
    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-md">
          <div className="flex col-span-1 cursor-pointer">
            <img class="h-8"
                  alt="menu"
                  src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
                  onClick={() => toggleMenuHandler()}
            />
            <a href="/">
              <img className="h-8 mx-4" alt="youtube-logo" src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"/>
            </a>
          </div>
          <div className="search-box col-span-10">
            <div>
              <input className="w-1/2 border border-gray-400 rounded-l-full p-2" type="text"
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)} />
              <button className="border border-gray-400 rounded-r-full p-2">search</button>
            </div>
            {showSuggestions ? (
              <div className="fixed bg-white py-2 px-2 w-[37rem] sshadow-lg rounded-lg border border-gray">
                <ul>
                  {
                    suggestions.map((item) => (
                      // <Link to= {`/results?search_query=${item}`}>
                        <li key={item} className="py-2 px-3 shadow-sm hover:bg-gray-100"> {item} </li>
                      // </Link>
                    ))
                  }
                </ul>
              </div>
              ) : null 
            }
            
          </div>
          
          <div className="user-inf0 col-span-1">
            <img className="w-8 h-auto" alt="user-logo" src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"/>
          </div>
        </div>
    )
}

export default Head;