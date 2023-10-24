import * as React from 'react'

function AddTodoForm () {

    let todoTitle = '';
    const handleAddTodo = (event) => {
      event.preventDefault();
      todoTitle = event.target.value;
    }

   return (
    <form>
      <label htmlFor="todoTitle">Title: </label>
      <input name='title' type="text" onChange={handleAddTodo} />
      <button>Add</button>
    </form>

   )
}



export default AddTodoForm;
