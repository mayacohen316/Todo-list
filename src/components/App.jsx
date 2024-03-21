import React, { useEffect, useState, useMemo } from "react";
import TodoList from "./TodoList";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import Sidebar from "./SideNavBar";
import Categories from "./Categories";

function App() {
  const [todos, setTodos] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
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

  const categories = useMemo(() => {
    const categoryMap = {};

    todos.forEach((todo) => {
      if (!categoryMap[todo.category]) {
        categoryMap[todo.category] = { totalTasks: 0, completedTasks: 0 };
      }
      categoryMap[todo.category].totalTasks += 1;
      if (todo.completed) {
        categoryMap[todo.category].completedTasks += 1;
      }
    });

    return Object.keys(categoryMap).map((name) => ({
      name,
      ...categoryMap[name],
    }));
  }, [todos]);

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

        <h1 className="text-center my-4 welcome-header">What's up, Dani!</h1>

        <Categories categories={categories} />

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
          onAddTodo={(newTodo) => {
            addTodo(newTodo);
          }}
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
