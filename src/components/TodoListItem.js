import React from "react";
import styles from "./TodoListItem.module.css";
import PropTypes from "prop-types";

const TodoListItem = (props) => {
  const { title, id, onRemoveTodo } = props;
  const handleRemoveClick = () => {
    onRemoveTodo(id);
  };

  return (
    <li className={styles.ListItem}>
      <span>{title}</span>
      <button type="button" onClick={handleRemoveClick} className={styles.btn}>
        Remove
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoListItem;
