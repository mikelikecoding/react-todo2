import React, { useState } from "react";
// import InputWithLabel from "./InputWithLabel";
import styles from "./Form.module.css"
// import styled from 'styled-components';



const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (e) => {
    setTodoTitle(e.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (todoTitle.trim().length === 0) return;

    onAddTodo({ title: todoTitle, id: Date.now() }); // won't work without the props
    setTodoTitle("");
  };

  return (
    <form onSubmit={handleAddTodo} className={styles.formSize}>
      <input className={styles.input}
        value={todoTitle}
        onChange={handleTitleChange}
        />
      <button type="submit" className={styles.inputBtn}>Submit</button>
    </form>
  );
};

export default AddTodoForm;
