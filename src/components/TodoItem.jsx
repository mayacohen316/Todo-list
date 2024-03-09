import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function TodoItem({ todo, onRemoveTodo }) {
  // Define a function here to handle the change of the checkbox if needed

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Form.Check 
          type="checkbox"
          id={`todo-${todo.id}`}
          label={todo.text}
          checked={todo.completed}
          onChange={() => {}} // Add your change handler here
          className="float-start"
        />
        <Badge pill bg="secondary" className="ms-2">
          {todo.category}
        </Badge>
        <Button 
          variant="outline-danger" 
          size="sm" 
          className="float-end" 
          onClick={() => onRemoveTodo(todo.id)}>
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TodoItem;
