import React from "react";
import {Input, Select} from "../../index";
import { categories, money, tax } from "./data";

const AddedInputForm = () => {
  return (
    <form className="mt-6">
      <div className="grid md:grid-cols-2 md:gap-6">
        <Input labelText={'Артикул'} />
        <Select labelSelect={'Категория'} categories={categories} />
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <Input labelText={'Артикул'} />
        <Input labelText={'Баркод'} />
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <Input labelText={'Поле для связи (Код)'} />
        <Input labelText={'Цена товара с учётом скидок'} />
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <Input labelText={'Цена товара без скидок'} />
        <Input labelText={'Цена для клиентов с подпиской Ozon'} />
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <Select labelSelect={'Категория'} categories={money} />
        <Select labelSelect={'Категория'} categories={tax} />
      </div>
    </form>
  );
};

export default AddedInputForm;
