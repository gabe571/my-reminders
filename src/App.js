import React, { useState } from 'react'
import Todo from './todo'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { text: 'Listen to Podcast'},
    { text: 'Watch Youtube video on React'},
    { text: 'Build Reminder App'}
  ]);

  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map(( todo, index) => (
          <Todo
          key={index}
          index={index}
          todo={todo}
          />
        ))}
      </div>
    </div>
  );
};

export default App