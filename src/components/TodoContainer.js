import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { useState, useEffect } from "react";
import styles from "../App.module.css";

function TodoContainer() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
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

      const mySort = (objectA, objectB) => {
        if (objectA.title < objectB.title) {
          return -1;
        } else if (objectA.title > objectB.title) {
          return 1;
        } else {
          return 0;
        }
      };

      setTodoList(todos.sort(mySort));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);

      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(setTodoList, setIsLoading);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
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
