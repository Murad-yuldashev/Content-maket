import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const ErrorProduct = () => {
  return (
    <div className="w-6/12 h-[570px] text-white bg-black-blackBorder border border-black-blackBorder md:pt-7 pt-5 md:pl-7 pl-5 rounded-[30px]">
      <h2 className="text-2xl font-medium">Совершенный продукт</h2>
      <p className="md:text-lg text-sm mt-1 pr-4">
        Content связывает не только тысячи категорий товаров на разных
        маркетплейсах, но и миллионы атрибутов и характеристик. Система
        постоянно совершенствует качество выгрузки контента
      </p>
      <div className="md:pt-7 pt-4 md:pl-7 pl-4 bg-black-Background rounded-[30px] mt-12">
        <div className="bg-black-grayDark p-4 rounded-3xl md:w-7/12 w-9/12 h-[350px]">
          <div className="flex items-center justify-between md:text-2xl text-base mb-5">
            <h3 className="md:text-lg text-sm">Уведомления</h3>
            <AiOutlineSetting />
          </div>
          <div className="bg-black-lightBlack rounded-[20px] py-2 px-4">
            <div className="flex items-center justify-between mb-1 md:text-base text-xs">
              <h4 className="">Ошибки</h4>
              <AiOutlineClose />
            </div>
            <p className="md:text-xs text-[10px] text-black-lightBlackText">
              Атрибут должен быть числом “Напряжение аккумулятора B”
            </p>
          </div>
          <div className="bg-black-lightBlack rounded-[20px] py-2 px-4 mt-3">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-base">Фатальные ошибки</h4>
              <AiOutlineClose />
            </div>
            <p className="text-xs text-black-lightBlackText">
              Количество значений аттрибута превышает допустимое - 5
              “Комплектация”, Длина значения аттрибута превышает 100 символов
              “Комплектация” Не указан баркод “Штрихкод товара”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorProduct;
