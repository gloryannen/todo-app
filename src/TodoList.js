import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';


const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = newTodo => {
    setTodos(todos => [...todos, newTodo]);
  };

  const removeTodo = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  return (
    <div className='TodoListMain'>
      <NewTodoForm addTodo={ addTodo } />
      <ul>
        { todos.map(({ id, todo, handleRemoveTodo }) =>
          <Todo
            todo={ todo }
            id={ id }
            key={ id }
            handleRemoveTodo={ removeTodo }
          />) }
      </ul>
    </div>
  )
}

export default TodoList;