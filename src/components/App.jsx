import React, { useState } from 'react';
import TodoList from './TodoList';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <>
      <h1 className="text-center my-4">To-Do List</h1>
      <Button className="newToDoButton" variant="primary" onClick={() => setModalShow(true)}>
        New To-Do
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onAddTodo={addTodo}
      />

      <TodoList todos={todos} onRemoveTodo={removeTodo} />
    </>
  );
}

export default App;
