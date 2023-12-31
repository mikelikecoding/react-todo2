import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { useState, useEffect } from "react";

// /*This is the app that will display the arrays of Object and the form with button*

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]); 
    return [todoList, setTodoList];
};

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

  const removeTodo = (idToRemove) => {
    const updatedTodoList = todoList.filter((item) => item.id !== idToRemove);
    setTodoList(updatedTodoList);
  };

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <>
      <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo} />
      <hr />
       <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
}

export default App;
