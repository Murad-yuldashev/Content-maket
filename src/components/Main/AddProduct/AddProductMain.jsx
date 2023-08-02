import React from "react";
import AddNewProduct from "./AddNewProduct";

const AddProductMain = () => {
  return (
    <div className="bg-white w-10/12 pt-8 pl-8 rounded-[30px] mb-10 border border-black-blackBorder bg-gradient-to-r from-blue-lightBlue to-red-purpl">
      <div className="w-[454px]">
        <h3 className="text-2xl font-medium text-black-Background">
          Очень удобно
        </h3>
        <p className="text-lg mt-1 text-black-Background">
          Теперь можно в одном месте заводить карточки товара, автоматически
          дублировать их для разных маркетплейсов и выгружать контент во все
          кабинеты
        </p>
      </div>
      <div className="flex justify-end mt-9">
      <AddNewProduct />
      </div>
    </div>
  );
};

export default AddProductMain;
