import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './NewTodoForm.css';

const NewTodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  // Handle input values
  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  // Handle form submission - create new todo , assign id, clear input
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ todo, id: uuid() });
    setTodo(' ');
  };

  //Todo form
  return (
    <div className='newTodoFormContainer'>
      <h1>Todo App</h1>
      <form onSubmit={ handleSubmit }>
        <input className='newTodoFormInput'
          type='text'
          id='todo'
          name='todo'
          value={ todo }
          onChange={ handleChange }
          placeholder='Add a task'
          required
        />
        <button className='newTodoFormAddBtn'>+</button>
      </form>
    </div>
  )
}

export default NewTodoForm;