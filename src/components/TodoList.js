import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

function TodoList({ todoList, onRemoveTodo }) {
  const sortedTodo = todoList.sort((objectA, objectB) => {
    if (objectA.title < objectB.title) {
      return -1;
    } else if (objectA.title > objectB.title) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <ul>
      {sortedTodo.map((item) => (
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
};

export default TodoList;
