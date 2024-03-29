import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const InputWithLabel = ({ children, value, onChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label htmlFor="todoInput">{children}</label>
      <input
        id="inputField"
        ref={inputRef}
        type="text"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

InputWithLabel.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputWithLabel;
