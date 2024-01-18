import React from "react";
import styles from "./TodoListItem.module.css";

const TodoListItem = (props) => {
  const { title, id, onRemoveTodo } = props;
  const handleRemoveClick = () => {
    onRemoveTodo(id);
  };

  return (
    < >
      <li className={styles.ListItem}>
        <span>{title}</span>
        <button type="button" onClick={handleRemoveClick} className={styles.btn}>
          Remove
        </button>
      </li>
    </>
  );
};

export default TodoListItem;
