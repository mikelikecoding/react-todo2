import * as React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


{/*This is the app that will display the arrays of Object and the form with button*/}

function App() {
  
  return (
    <div>
      <h1>Todo List</h1>


  <AddTodoForm />
<hr />
 <TodoList />  
</div> );

}


export default App;