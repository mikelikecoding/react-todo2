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
    // Save todoList to localStorage whenever it changes
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]); // `todoList` specified as a dependency

  return [todoList, setTodoList];
};



function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  console.log(todoList, todoList.title)

  const removeTodo = (idToRemove) => {
    const updatedTodoList = todoList.filter(item => item.id !== idToRemove);
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
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
