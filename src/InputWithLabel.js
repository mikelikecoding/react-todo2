import React, { useEffect, useRef } from 'react';

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

export default InputWithLabel;
