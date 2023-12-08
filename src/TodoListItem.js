import React from "react";

const TodoListItem = ({ id, title, onRemoveTodo }) => {
  const handleRemoveClick = () => {
    onRemoveTodo(id);
  };

  return (
    <div>
      <span>{title}</span>
      <button type="button" onClick={handleRemoveClick}>
        Remove
      </button>
    </div>
  );
};

export default TodoListItem;
