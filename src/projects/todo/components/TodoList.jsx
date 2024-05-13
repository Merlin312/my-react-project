import { useState } from 'react';
import './../style/TodoList.css';
const TodoList = ({ todo, addTodo }) => {
  const handleDelete = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    addTodo(newTodo);
  };
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button className="btnTest" onClick={increment}>
        {`Count: ${count}`}
      </button>
      <h1>Todo list:</h1>
      <ul>
        {todo.map((todos, index) => {
          return (
            <li key={index}>
              {todos}
              <button
                className="delete-button"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TodoList;
