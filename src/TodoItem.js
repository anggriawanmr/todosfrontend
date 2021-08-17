import React from "react";

const TodoItem = ({ name, completed, onDelete }) => (
  <li style={{ textDecoration: completed ? "line-through" : "none" }} onClick={onToggle}>
    {name}
    <span onClick={onDelete}>X</span>
  </li>
);

export default TodoItem;
