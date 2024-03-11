import React from 'react';
import TodoItem from './TodoItem'; // Import the TodoItem component

function TodoList({ todos, onRemoveTodo, onUpdateTodo }) {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} />
      ))}
    </div>
  );
}

export default TodoList;
