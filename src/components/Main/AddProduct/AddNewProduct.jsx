import React from "react";
import { Arrow, Duxi, Plus, Refresh } from "../../../Assets";
import AddBox from "./AddBox";
import AddedInputForm from "./AddedInputForm";

const AddNewProduct = () => {
  return (
    <div className="w-[88%] text-white p-8 flex gap-x-5 rounded-tl-[20px] bg-black-Background">
      <div className="flex flex-col justify-between">
        <p className="flex gap-x-3 text-sm font-semibold">
          <img src={Arrow} alt="arrow" /> Назад к списку
        </p>
        <div className="border border-black-DarkMode rounded-2xl p-3">
          <img className="px-14 bg-white rounded-2xl" src={Duxi} alt="duxi" />
          <p className="flex items-center justify-center font-semibold mt-3 text-fiolete">
            <img src={Plus} alt="plus" />
            Загрузить фото
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex items-start">
          <AddBox />
          <div className="flex items-start ml-16 gap-x-2">
            <button className="py-2 px-5 bg-fiolete rounded-3xl text-sm text-black-Background font-semibold">
              Экспортировать
            </button>
            <button className="w-9">
              <img src={Refresh} alt="refresh" />
            </button>
          </div>
        </div>
        <AddedInputForm />
      </div>
    </div>
  );
};

export default AddNewProduct;
