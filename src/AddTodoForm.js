// import React from 'react';
// import * as reactDom from 'react-dom'
// import { useState } from "react";

import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

const AddTodoForm = ({onAddTodo}) => {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (e) => {
    setTodoTitle(e.target.value);
  };

  const handleAddTodo = (event) => {
      event.preventDefault();
      //if todoTile === '' I don't want it to return anything
      if(todoTitle.trim().length === 0) return
           //   let onAddTodo;
       onAddTodo({title: todoTitle, id: Date.now()}) // won't work without the props
             setTodoTitle('')
         }

  return (
     <form onSubmit={handleAddTodo} >
      <InputWithLabel
        label="Title" // Pass the label prop here with the value "Title"
        value={todoTitle}
        onChange={handleTitleChange}
        
      />
     <button type='submit'>Submit</button> 
      {/* Other form elements or actions */}
    </form>
  );
};
// function AddTodoForm ({onAddTodo}) {

// const [todoTitle, setTodoTitle] = useState('');

// const handleTitleChange = (event) => {
//      const newTodoTitle = event.target.value
//      setTodoTitle(newTodoTitle)
// }

//  const handleAddTodo = (event) => {
//  event.preventDefault();
//  //if todoTile === '' I don't want it to return anything
//  if(todoTitle.trim().length === 0) return
//       //   let onAddTodo;
//   onAddTodo({title: todoTitle, id: Date.now()}) // won't work without the props
//         setTodoTitle('')
//     }

//    return (
//     <div>
//     <form onSubmit={handleAddTodo} >

//       {/* <label htmlFor="todoTitle">Title: </label>
//       <input id='todoTitle' value={todoTitle} type="text" name='title' onChange={handleTitleChange} /> */}
//       <button type='submit'>Submit</button>

//       {/* <span>{todoTitle}</span> */}

//     </form>

//     </div>

//    )
// }

export default AddTodoForm;
