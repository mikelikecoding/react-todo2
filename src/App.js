import * as React from 'react';

{/*This is an array of object to create a list*/}

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

{/*This is the app that will display the arrays of Object*/}

function App() {
  return (
<div>
      <h1>Todo List</h1>

<hr />
    <ul>
        {/*This map function will iterate through the array of object*/}

      {todoList.map((item) =>
        <li key={item.objectID} >Chapter  {item.objectID}:  {item.title}
        </li> )}

    </ul>
</div> );
}

export default App;
