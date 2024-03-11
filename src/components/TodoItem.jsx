import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import "../styles/TodoItem.css"; // Import the CSS file

function TodoItem({ todo, onRemoveTodo, onUpdateTodo }) {
  const handleCheckboxChange = (event) => {
    onUpdateTodo({
      ...todo,
      completed: event.target.checked,
      interacted: true,
    });
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <Card className="todo-item mb-3 shadow-sm">
      <Card.Body>
        <Form.Check
          type="checkbox"
          id={`check-${todo.id}`}
          checked={todo.completed}
          onChange={handleCheckboxChange}
          className="float-start"
        />
        <div className="todo-text-container">
          <span className={todo.completed ? "completed-text" : ""}>
            {todo.text}
          </span>
          {todo.interacted && (
            <span
              className={`completed-line ${
                todo.completed ? "animate-forwards" : "animate-backwards"
              }`}
              style={{ width: todo.completed ? "100%" : "0" }}
            ></span>
          )}
        </div>
        <span className="todo-due-date">
          {todo.dueDate ? formatDate(todo.dueDate) : ""}
        </span>
        <Badge bg="secondary" className="ms-2">
          {todo.category}
        </Badge>
        <Button
          variant="outline-danger"
          size="sm"
          className="float-end"
          onClick={() => onRemoveTodo(todo.id)}
        >
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TodoItem;
