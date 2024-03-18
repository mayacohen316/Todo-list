import React, { useState } from "react";
import TodoList from "./TodoList";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import Sidebar from "./SideNavBar"

function App() {
  const [todos, setTodos] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`app-container ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <Sidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />

      <div className="main-content">
        <div
          className={`hamburger ${isSidebarOpen ? "hide" : ""}`}
          onClick={toggleSidebar}
        >
          ☰
        </div>

        <h1 className="text-center my-4">To-Do List</h1>
        <Button
          variant="primary"
          onClick={() => setModalShow(true)}
          className="my-3"
        >
          New To-Do
        </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          onAddTodo={addTodo}
        />
        <TodoList
          todos={todos}
          onRemoveTodo={removeTodo}
          onUpdateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default App;
