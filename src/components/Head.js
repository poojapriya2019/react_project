import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Head = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        // Call dispatch with the action function
        dispatch(toggleMenu()); 
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
            <input className="w-1/2 border border-gray-400 rounded-l-full p-2" type="text" />
            <button className="border border-gray-400 rounded-r-full p-2">search</button>
          </div>
          <div className="user-inf0 col-span-1">
            <img className="w-8 h-auto" alt="user-logo" src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"/>
          </div>
        </div>
    )
}

export default Head;