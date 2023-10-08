import * as React from 'react'

// This is the function that creates the form and button

function AddTodoForm () {
   return (
    <form>
      <label htmlFor="todoTitle">Title: </label>
      <input id="todoTitle" type="text" />
      <button>Add</button>
    </form>

   )
}



export default AddTodoForm;