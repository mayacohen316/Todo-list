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
  const [activeCategory, setActiveCategory] = useState("All");

  const [categoriesData, setCategoriesData] = useState([
    { name: "General", tasksCount: 0 },
    { name: "Work", tasksCount: 0 },
    { name: "Personal", tasksCount: 0 },
  ]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);

    const updatedCategories = categoriesData.map((category) => {
      if (category.name === newTodo.category) {
        return { ...category, tasksCount: category.tasksCount + 1 };
      }
      return category;
    });
    setCategoriesData(updatedCategories);
  };

  const removeTodo = (id) => {
    // Find the todo to be removed
    const todoToRemove = todos.find((todo) => todo.id === id);
    if (todoToRemove) {
      // Update categoriesData to decrement the tasksCount for the removed todo's category
      const updatedCategories = categoriesData.map((category) => {
        if (category.name === todoToRemove.category) {
          return { ...category, tasksCount: category.tasksCount - 1 };
        }
        return category;
      });
      setCategoriesData(updatedCategories);
    }
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

  const filteredTodos = todos.filter((todo) =>
  activeCategory === 'All' || todo.category === activeCategory
);


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

        <Categories
          categories={categoriesData}
          todos={todos}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

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
          categories={categoriesData}
          onAddTodo={addTodo}
        />
        <TodoList
          todos={filteredTodos}
          onRemoveTodo={removeTodo}
          onUpdateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default App;
