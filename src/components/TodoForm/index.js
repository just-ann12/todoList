import React, { useState } from "react";
const TodoData = ({ onAddTask }) => {
  const [todoData, setTodoData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(todoData);
    setTodoData("");
  };

  const handleChange = (e) => {
    setTodoData(e.currentTarget.value);
  };

  const handleKeyPress = (e) => {
    e.key === "Enter" ? handleSubmit(e) : null;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={todoData}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Enter task"
      />
      <button>Save</button>
    </form>
  );
};
export default TodoData;
