import React, { useState } from 'react'
import Todo from './todo'
import TodoForm from './todoForm'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { text: 'Listen to Podcast',
    isCompleted: false
    },
    { text: 'Watch Youtube video on React',
    isCompleted: false
    },
    { text: 'Build Reminder App',
    isCompleted: false
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map(( todo, index) => (
          <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          />
        ))}
          <TodoForm
          addTodo={addTodo}
          />
      </div>
    </div>
  );
};

export default App