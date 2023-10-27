import React from 'react';
// import * as reactDom from 'react-dom'
import { useState } from "react";

function AddTodoForm (props) {
 const handleAddTodo = (event) => {
        event.preventDefault();
     const todoTitle = event.target.title.value;
        console.log(todoTitle, `ARE YOU HERE111`);
      const form = document.querySelector('form');
      form.reset();
      props.onAddTodo(todoTitle);

    }

   return (
    <div>
    <form onSubmit={handleAddTodo} >
  
      <label htmlFor="todoTitle">Title: </label>
      <input id='todoTitle' type="text" name='title' />
      <button type='submit'>Submit</button>
    
      {/* <span>{todoTitle}</span> */}
      
    </form>

    </div> 

   )
}



export default AddTodoForm;
