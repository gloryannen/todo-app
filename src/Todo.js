import React from 'react';
import './Todo.css';

const Todo = ({ todo, id, handleRemoveTodo }) => {
  const removeTodo = () => handleRemoveTodo(id);

  return (
    <div className='TodoContainer'>
      <li>{ todo }</li>
      <button className='todoRemoveBtn' onClick={ removeTodo }> X </button>
    </div>
  )
}

export default Todo;