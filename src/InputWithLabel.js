import React from "react";

const InputWithLabel = ({ children, value, onChange }) => {
  return (
    <>
      <label htmlFor="todoInput">{children}</label>
      <input
        id="todoInput"
        type="text"
        value={value}
        onChange={onChange}
        autoFocus // Adding autoFocus prop here
      />
    </>
  );
};

export default InputWithLabel;
