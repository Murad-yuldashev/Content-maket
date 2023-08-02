import React, { useEffect, useState } from "react";
import { Button, Navbar } from "../index";
import { Content, Media } from "../../Assets";
import HeaderBackground from "../../Assets/img/HeaderBackground.png";
import HeaderMobile from "../../Assets/img/HeaderMobile.png";

const Header = () => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 448px)").matches) {
        setImageSrc(`${HeaderMobile}`); //"../../Assets/img/HeaderMobile.png"
      } else {
        setImageSrc(`${HeaderBackground}`); //"../../Assets/img/HeaderBackground.png"
      }
    };

    handleResize(); // set initial image source on mount

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  let sectionStyle = {
    // width: "100%",
    // height: "1350px",
    backgroundPosition: "center bottom 0",
    backgroundImage: `url(${require("../../Assets/img/HeaderBackground.png")})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      // style={sectionStyle}
      style={{backgroundImage: `url(${imageSrc})`, backgroundPosition: "center bottom 0", backgroundSize: "contain", backgroundRepeat: "no-repeat",}}
      className={`pt-7 bg-black-Background px-2 relative w-full flex flex-col items-center h-[960px] md:h-[1350px] text-center`}
    >
      <Navbar />
      <div className=" md:w-7/12 w-full flex flex-col items-center justify-center mt-24 shrink px-2 sm:px-10 ">
        <img src={Content} alt="content" />
        {/* <h1 style={{fontStretch: '200%'}} className="text-white text-[100px]">C<span >o</span>ntent</h1> */}
        <p className="text-gray-lightGray text-xl py-10">
          Теперь можно в одном месте заводить карточки товара, автоматически
          дублировать их для разных маркетплейсов и выгружать контент во все
          кабинеты.
        </p>
        <div className="flex justify-center sm:flex-row flex-col gap-3 w-full">
          <Button
            title={"Попробовать бесплатно"}
            styleBtn={`bg-green-lightGreen rounded-[30px]  px-6 py-4 text-base font-semibold`}
          />
          <Button
            title={
              <div className="flex justify-center gap-2">
                <img src={Media} alt="media" /> Видеообзор сервиса
              </div>
            }
            styleBtn={`bg-green-lightGreen rounded-[30px]  px-6 py-4 text-base text-white font-semibold`}
          />
        </div>
      </div>
      {/* <div style={sectionStyle} className="w-screen h-screen"></div> */}
      {/* <img className="w-full h-full" src={HeaderBackground} alt="header" /> */}
    </section>
  );
};

export default Header;
