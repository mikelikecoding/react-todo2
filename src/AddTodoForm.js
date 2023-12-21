import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

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
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        value={todoTitle}
        onChange={handleTitleChange}
      ></InputWithLabel>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddTodoForm;
