import React from "react";

const Button = ({ title, styleBtn, handleClick }) => {
  return (
    <button onClick={handleClick} className={`${styleBtn}`}>
      {title}
    </button>
  );
};

export default Button;
