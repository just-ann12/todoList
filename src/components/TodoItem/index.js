import React from "react";
const TodoItem = ({ todo, toggleTask, handleRemoveTask }) => {
  return (
    <div key={todo.id} className="item-todo">
      <div
        className={todo.complete ? "item-text strike" : "item-text"}
        onClick={() => toggleTask(todo.id)}
      >
        {todo?.task}
      </div>
      <div className="item-delete" onClick={() => handleRemoveTask(todo.id)}>
        X
      </div>
    </div>
  );
};
export default TodoItem;
