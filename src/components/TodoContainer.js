import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { useState, useEffect } from "react";
import styles from "../App.module.css";
import React, { useCallback } from "react";

function TodoContainer() {
  
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

 
  const fetchData = useCallback(async () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };

    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      const todos = data.records.map((todo) => ({
        id: todo.id,
        title: todo.fields.title,
      }));

      // const sortedTodo = todos.sort((objectA, objectB) => {
      //   if (objectA.title < objectB.title) {
      //     return -1;
      //   } else if (objectA.title > objectB.title) {
      //     return 1;
      //   } else {
      //     return 0;
      //   }
      // });

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);

      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(setTodoList, setIsLoading);
  }, [fetchData]);

  const removeTodo = async (idToRemove) => {
    const deleteUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/${idToRemove}`;

    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };

    try {
      const response = await fetch(deleteUrl, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      setTodoList(todoList.filter((item) => item.id !== idToRemove));
    } catch (error) {
      console.error("Error deleting data:", error.message);
    }
  };

  const addTodo = async (newTodo) => {
    try {
      const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/`;

      const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            title: capitalizeFirstLetter(newTodo.title),
          },
        }),
      };

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const responseData = await response.json();

      setTodoList([
        ...todoList,
        { id: responseData.id, title: responseData.fields.title },
      ]);
    } catch (error) {
      console.error("Error posting data:", error.message);
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className={styles.appStyles}>
      <h1 className={styles.todoList}>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <hr />
      {isLoading ? (
        <p>Page Is Loading....</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
      <p className={styles.logo}>(T/D)</p>
    </div>
  );
}

export default TodoContainer;
