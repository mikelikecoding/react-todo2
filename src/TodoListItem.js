import React from "react";

const TodoListItem = (props) => {
  const {title, id, onRemoveTodo} = props;
  const handleRemoveClick = () => {
    onRemoveTodo(id);
  };

  return (
    <li>
      <span>{title}</span>
      <button type="button" onClick={handleRemoveClick}>
        Remove
      </button>
    </li>
  );
};

export default TodoListItem;
