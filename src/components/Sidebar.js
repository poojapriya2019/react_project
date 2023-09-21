import React from "react";
import { useSelector } from "react-redux";
const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    // early return 
    if(!isMenuOpen) return null;
    return (
        <div className="p-5 shadow-lg w-48">
          <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Subscription</li>
            <li>Library</li>
            <li>History</li>
            <li>Watch Later</li>
          </ul>
          <h1 className="font-bold">Subscriptions</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Movies</li>
            <li>Games</li>
          </ul>
        </div>
    )                                                                                                                                                                                                                                                                                                                                                                     
}
export default Sidebar;