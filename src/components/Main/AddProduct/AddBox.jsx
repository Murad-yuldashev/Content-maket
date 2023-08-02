import React from "react";
import { add_box } from "./data";
import { AiOutlinePlus } from "react-icons/ai";

const AddBox = () => {
  
  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-x-5">
        {add_box.map((item, ind) => (
          <div
            key={ind}
            className={`${item.title ? 'bg-black-lightBlack' : 'bg-transparent'} w-36 border border-black-DarkMode h-24 p-4 flex flex-col items-center justify-center rounded-2xl`}
          >
            {item.title ? (
              <>
                <h3 className="text-sm">{item.title}</h3>
                <p className="text-xs text-black-lightBlackText px-5">{item.desc.slice(0, 25)}</p>
              </>
            ) : (
              <span className="text-4xl text-black-lightBlackText">
                <AiOutlinePlus />
              </span>
            )}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default AddBox;
