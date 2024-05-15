import React, { useEffect, useState } from 'react';
import './../style/TodoList.css';

const TodoList = ({ todo, addTodo, theme }) => {
  const [sortedTodo, setSortedTodo] = useState([]);

  const handleDelete = (index) => {
    const newTodo = todo.slice(); // Створюємо копію масиву todo
    newTodo.splice(index, 1);
    addTodo(newTodo);
  };

  const handleCompleted = (index) => {
    const newTodo = sortedTodo.map((item, i) => {
      if (i === index) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    addTodo(newTodo);
  };

  // Ефект для сортування завдань при зміні масиву todo
  useEffect(() => {
    const sorted = [...todo].sort((a, b) => a.completed - b.completed);
    setSortedTodo(sorted);
  }, [todo]);

  return (
    <div>
      {todo.length >= 1 && (
        <h1
          style={{ color: theme === 'light' ? 'rgb(63, 112, 112)' : 'azure' }}
        >
          Todo list:
        </h1>
      )}

      <ul>
        {sortedTodo.map((todoItem, index) => (
          <li
            key={index}
            style={{
              textDecoration: todoItem.completed ? 'line-through' : 'none',
              color: todoItem.completed ? 'rgb(31, 45, 45)' : 'rgb(41, 45, 45)',
            }}
          >
            <div>
              <span
                className="circle"
                style={{
                  backgroundColor: todoItem.completed
                    ? '#4CAF50'
                    : 'transparent',
                }}
              ></span>
              {todoItem.text}
            </div>
            <div>
              <button
                className="btnDone"
                onClick={() => handleCompleted(index)}
              >
                {todoItem.completed ? 'Undo' : 'Done'}
              </button>
              <button
                className="delete-button"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
