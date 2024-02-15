import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from  "prop-types"

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem
        key={item.id}
        id={item.id}
        title={item.title}
        onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  );
}



TodoList.propTypes = {
  todoList: PropTypes.array, 
  
  onRemoveTodo: PropTypes.func.isRequired,
}

export default TodoList;
