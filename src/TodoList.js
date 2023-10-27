import React from 'react';
import TodoListItem from './TodoListItem';

/////////////////////////////
// The todo arry
////////////////////////////

const todoList = [
     {
       title: 'HelloReact',
      id: 1,
   }, {
       title: 'Requirements',
       id: 2,
   },{
     title: 'SettingupaReactProject',
     id: 3,
   },{
     title: 'MeettheReactComponent.',
     id: 4,
   },{
     title: 'React JSX',
     id: 5,
   },{
     title: 'Lists in React',
     id: 6,
   },
   
   
   ];

////////////////////////////////   
// The todo function
///////////////////////////////

function TodoList () {
    return (
        <ul>
        {/*This map function will iterate through the array of object*/}
      
      {todoList.map((todo) =><TodoListItem key={todo.id}  title={todo.title}  /> )} 
      
    
      </ul>
    )
}
      
   
    

  

export default TodoList;
