import React, { useState } from 'react';
import Createargonautes from './Createargonautes';
import Todo from './Todo';

function Liste() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h2>Ajouter un(e) Argonaute</h2>
      <Createargonautes onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
      />
    </>
  );
}

export default Liste;