import React, { useState } from 'react';
import Todo from './Todo.js'
import TodoForm from './TodoForm.js'
function App() {
  const [todos, setTodos] = useState([]);
  
  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substring (2,9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem]);
    }
  }
  const removeTask = (id) => {
    console.log(id)
    setTodos(todos.filter((todo) => todo.id!== id));
  }
  const handleToggle = (id) => {
    setTodos([...todos.map((todo) => 
      todo.id === id ? {...todo, complete: !todo.complete} : {...todo} 
      )])
  }

  return (
    <div className="App">
      <header>
        <h1>ToDo List: {todos?.length}</h1>
      </header>
      <TodoForm addTask={addTask}/>
      {todos.length!==0 && todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        )
      })}
    </div>
  );
}

export default App;
