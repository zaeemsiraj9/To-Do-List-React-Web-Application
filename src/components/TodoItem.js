import React, { useState } from 'react';

function TodoItem({ todo, index, toggleComplete, deleteTodo }) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleDelete = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      deleteTodo(index);
    }, 500); // Match this duration with the fade-out animation duration
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''} ${isFadingOut ? 'fade-out' : ''}`}>
      {todo.text}
      <div>
        <button onClick={() => toggleComplete(index)}>
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
