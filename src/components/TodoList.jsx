import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onRemoveTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
      ))}
    </div>
  );
}

export default TodoList;
