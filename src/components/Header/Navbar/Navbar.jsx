import React from "react";
import { BurgerMenu, FirstMenu, LogoMenu } from "../../../Assets/index";
import { Button } from "../../index";

const Navbar = () => {
  return (
    <div className="flex justify-center w-full font-raleway">
      <Button
        styleBtn={`flex items-center justify-between border-2 border-gray-lightGray px-2 rounded-2xl w-full sm:w-8/12 md:w-4/12`}
        title={
          <>
            <img className="border-r-2 border-gray-lightGray" src={FirstMenu} alt="menu" />
            <div className="flex gap-2 ">
              <img src={LogoMenu} alt="logomenu" />
              <p className="text-[1.5rem] text-white">Topseller</p>
            </div>
            <img className="border-l-2 border-gray-lightGray" src={BurgerMenu} alt="BurgerMenu" />
          </>
        }
      />
    </div>
  );
};

export default Navbar;
