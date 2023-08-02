import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import AddBox from "../AddProduct/AddBox";

const EconomyTime = () => {
  return (
    <div className="w-6/12 h-[570px] text-white bg-black-blackBorder border border-black-blackBorder pt-7 pl-7 rounded-[30px]">
      <h2 className="text-2xl font-medium">Экономия времени</h2>
      <p className="md:text-lg text-sm mt-1 pr-4">
        Сократите в несколько раз время на заведение карточек товара на
        маркетплейсах. Централизованное управление контентом позволит обновлять
        информацию во всех кабинетах в несколько кликов
      </p>
      <div className="pt-7 pl-7 bg-black-Background rounded-[30px] mt-12 h-[378px]">
        <AddBox />
      </div>
    </div>
  );
};

export default EconomyTime;
