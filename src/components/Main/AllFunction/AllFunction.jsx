import React from "react";
import { Link } from "react-router-dom";

const AllFunction = () => {
  const url = "https://www.apple.com/iphone-14-pro";
  return (
    <div className="md:text-6xl sm:text-4xl text-lg font-semibold text-white mt-52">
      <h2 className="md:text-6xl sm:text-5xl text-4xl">Все функции</h2>
      <div className="flex items-center gap-12">
        <Link
          to={url}
          target="_blank"
          className="md:text-5xl text-4xl sm:py-7 py-3 sm:px-12 px-5 md:rounded-[50px] rounded-[20px] bg-gradient-to-r from-green-lightGreen to-blue-blurBlue hover:from-yellow-btnYellow hover:to-red-redLight"
        >
          PIM
        </Link>
        <div className="">
            <h2>product</h2>
            <div className="flex items-center"><div className="md:w-64 sm:w-36 w-[72px] md:h-2 sm:h-1.5 h-1 bg-white rounded-md"></div><h2>information</h2></div>
            <div className="flex items-center"><div className="md:w-[457px] sm:w-56 w-24 md:h-2 sm:h-1.5 h-1 bg-white rounded-md"></div><h2>management</h2></div>
        </div>
      </div>
    </div>
  );
};

export default AllFunction;
