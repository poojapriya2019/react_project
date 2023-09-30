import React from "react";
import Buttons from "./Buttons";

const list = ["All", "Music", "computers", "Javascript", "Namaste React", "Cricket", "Live", "News"]
const ButtonLists = () => {
    return (
        <div className="flex">
          {list.map((item, index) => (
                <div key={index}>
                    <Buttons name={item} />
                </div>
            ))}
        </div>
    )
}
export default ButtonLists;