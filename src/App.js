import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { useState, useEffect } from "react";

// /*This is the app that will display the arrays of Object and the form with button*


function App() {

  
 
  const [todoList, setTodoList] = useState([]);
    
    const [isLoading, setIsLoading] = useState(true);
    
    
    useEffect(() => {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ data: { todoList: JSON.parse(localStorage.getItem('savedTodoList')) || [], } });
        },2000)
      })
      .then((result) => {
        setTodoList(result.data.todoList);
        setIsLoading(false);
      });
    },[]);
    
    
    useEffect(() => {
      if (!isLoading) {
        localStorage.setItem('todoList', JSON.stringify(todoList));
      }
    }, [todoList, isLoading]);
    
    
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
      {isLoading ? (
        <p>Page Is Loading....</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
       <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
}

export default App;
