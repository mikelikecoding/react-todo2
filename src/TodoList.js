import * as React from 'react';

/////////////////////////////
// The todo arry
////////////////////////////

const todoList = [
     {
       title: 'HelloReact',
       objectID: 1,
   }, {
       title: 'Requirements',
       objectID: 2,
   },{
     title: 'SettingupaReactProject',
     objectID: 3,
   },{
     title: 'MeettheReactComponent.',
     objectID: 4,
   },{
     title: 'React JSX',
     objectID: 5,
   },{
     title: 'Lists in React',
     objectID: 6,
   },
   
   
   ];

////////////////////////////////   
// The todo function
///////////////////////////////

function TodoList () {
    return (
        <ul>
        {/*This map function will iterate through the array of object*/}
      
      {todoList.map((item) =>
        <li key={item.objectID} >Chapter  {item.objectID}:  {item.title}
        </li> )}
      
      </ul>
    )
}
      
   
    

  

export default TodoList;