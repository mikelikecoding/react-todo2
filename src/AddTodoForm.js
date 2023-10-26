import * as React from 'react';
import { useState } from "react";

function AddTodoForm () {

  const [todoTitle, setTodoTitle] = React.useState('');



    
    const handleAddTodo = (event) => {
        event.preventDefault();
        setTodoTitle = event.target.value;
        console.log(todoTitle);
    }

   return (
    <form>
      <label htmlFor="todoTitle">Title: </label>
      <input name='title' type="text" onSubmit={handleAddTodo} />
      <button>Add</button>
    
      <span>{setTodoTitle}</span>
    </form>

   

   )
}



export default AddTodoForm;
