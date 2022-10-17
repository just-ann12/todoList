import React, { useState } from "react";
import TodoItem from "./components/TodoItem/index.js";
import TodoData from "./components/TodoForm/index.js";
import Header from "./components/Header";
import { nanoid } from "nanoid";
const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTask = (taskName) => {
    if (taskName) {
      const newItem = {
        id: nanoid().toString(36).substring(2, 9),
        task: taskName,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  const handleRemoveTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleStatus = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  return (
    <div className="App">
      <Header count={todos.length} />
      <TodoData onAddTask={handleAddTask} />
      {todos.length !== 0 &&
        todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              toggleTask={handleToggleStatus}
              handleRemoveTask={handleRemoveTask}
            />
          );
        })}
    </div>
  );
};

export default App;
