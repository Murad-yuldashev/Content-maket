import React from "react";

const TopsellerContent = () => {
  return (
    <div className="text-white mt-36 mb-24">
      <p className="md:text-4xl sm:text-xl text-sm font-medium mb-5">В системе управления контентом</p>
      <div className="flex sm:flex-col flex-row gap-3 sm:gap-0">
        <h2 className="md:text-[12rem] sm:text-[8rem] text-4xl font-semibold md:leading-none">Topseller</h2>
        <h2 style={{textFillColor: 'transparent'}} className="md:text-[12rem] sm:text-[8rem] text-4xl md:leading-none font-semibold md:ml-72 ml-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-blurBlue to-red-redLight">
          Content
        </h2>
      </div>
    </div>
  );
};

export default TopsellerContent;
