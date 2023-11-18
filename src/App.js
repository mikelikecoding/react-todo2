import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm'
// import Search from './Search';
import {useState} from 'react';

// /*This is the app that will display the arrays of Object and the form with button*

function App() {
  const [newTodo, setNewTodo] = useState('');
  return (
    <div>
    <div>
      <h1>Todo List</h1>

   {/* <Search /> */}
  <AddTodoForm  onAddTodo={setNewTodo}/>
<hr />
 <p>
  {newTodo}
 </p>
 <TodoList />  
</div> );


}


export default App;