import React from 'react';
import TodoListItem from './TodoListItem';

/////////////////////////////
// The todo arry
////////////////////////////



////////////////////////////////   
// The todo function
///////////////////////////////

function TodoList ({todoList}) {
    return (
        <ul>
        {/*This map function will iterate through the array of object*/}
      
      {/* {todoList.map((todo) =><TodoListItem key={todo.id}  title={todo.title}  /> )} */}
      {todoList.map(todo =><TodoListItem key={todo.id} item = {todo}  /> )} 
      
    
      </ul>
    )
}
      
   
    

  

export default TodoList;
