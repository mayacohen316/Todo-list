// MyVerticallyCenteredModal.jsx
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function MyVerticallyCenteredModal({ show, onHide, onAddTodo, categories }) {
  const [newTodoText, setNewTodoText] = useState("");
  const [newTodoCategory, setNewTodoCategory] = useState(categories[0].name);
  const [newTodoImportance, setNewTodoImportance] = useState("Medium");
  const [newTodoDueDate, setNewTodoDueDate] = useState("");
  const [newTodoNotes, setNewTodoNotes] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Math.random().toString(),
      text: newTodoText,
      completed: false,
      creationDate: new Date().toISOString(),
      category: newTodoCategory,
      importance: newTodoImportance,
      dueDate: newTodoDueDate,
      notes: newTodoNotes,
    };
    onAddTodo(newTodo);
    setNewTodoText("");
    setNewTodoCategory("General");
    setNewTodoImportance("Medium");
    setNewTodoDueDate("");
    setNewTodoNotes("");
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New To-Do
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleAddTodo}>
          <Form.Group className="mb-3" controlId="newTodoText">
            <Form.Label>To-Do Text</Form.Label>
            <Form.Control
              type="text"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
              placeholder="Enter to-do"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="newTodoCategory">
            <Form.Label>Category</Form.Label>
            <Form.Select
              value={newTodoCategory}
              onChange={(e) => setNewTodoCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="newTodoImportance">
            <Form.Label>Importance</Form.Label>
            <Form.Select
              value={newTodoImportance}
              onChange={(e) => setNewTodoImportance(e.target.value)}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="newTodoDueDate">
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="date"
              value={newTodoDueDate}
              onChange={(e) => setNewTodoDueDate(e.target.value)}
              placeholder="Select due date"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="newTodoNotes">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={newTodoNotes}
              onChange={(e) => setNewTodoNotes(e.target.value)}
              placeholder="Additional notes"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add To-Do
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
