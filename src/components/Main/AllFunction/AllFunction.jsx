import React from "react";
import { Link } from "react-router-dom";

const AllFunction = () => {
  const url = "https://www.apple.com/iphone-14-pro";
  return (
    <div className="text-6xl font-semibold text-white mt-52">
      <h2 className="">Все функции</h2>
      <div className="flex items-center gap-12">
        <Link
          to={url}
          target="_blank"
          className="text-5xl py-7 px-12 rounded-[50px] bg-gradient-to-r from-green-lightGreen to-blue-blurBlue hover:from-yellow-btnYellow hover:to-red-redLight"
        >
          PIM
        </Link>
        <div className="">
            <h2>product</h2>
            <div className="flex items-center"><div className="w-64 h-2 bg-white"></div><h2>information</h2></div>
            <div className="flex items-center"><div className="w-[457px] h-2 bg-white"></div><h2>management</h2></div>
        </div>
      </div>
    </div>
  );
};

export default AllFunction;
