import React from "react";

const Input = ({labelText}) => {
  return (
    <div className="relative z-0 w-full mb-8 group">
      <input
        type="text"
        name="floating_first_name"
        id="floating_first_name"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-black-DarkMode appearance-none dark:text-white focus:outline-none focus:ring-0 peer"
        placeholder=" "
        required
      />
      <label
        htmlFor="floating_first_name"
        className="peer-focus:font-medium absolute text-xs text-black-lightBlackText duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {labelText}
      </label>
    </div>
  );
};

export default Input;
