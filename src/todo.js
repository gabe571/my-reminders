function Todo({ todo, index, completeTodo, removeTodo }) {

  return(
    <div className='todo'
    style = {{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {todo.text}
      <button onClick={(e) => completeTodo(index)}>Completed</button>
      <button onClick={(e) => removeTodo(index)}>x</button>
    </div>
  );
};

export default Todo