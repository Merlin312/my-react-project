import './../style/TodoList.css';
const TodoList = ({ todo, addTodo }) => {
  const handleDelete = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    addTodo(newTodo);
  };

  const handleCompleted = (index) => {
    const newTodo = todo.map((item, i) => {
      if (i === index) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    addTodo(newTodo);
  };

  return (
    <div>
      <h1>Todo list:</h1>
      <ul>
        {todo.map((todos, index) => {
          return (
            <li
              key={index}
              style={{
                textDecoration: todos.completed ? 'line-through' : 'none',
                color: todos.completed ? 'rgb(31, 45, 45)' : 'rgb(41, 45, 45)',
              }}
            >
              <div>
                <span
                  className="circle"
                  style={{
                    backgroundColor: todos.completed
                      ? '#4CAF50'
                      : 'transparent',
                  }}
                ></span>

                {todos.text}
              </div>

              <div>
                <button
                  className="btnDone"
                  onClick={() => handleCompleted(index)}
                >
                  {todos.completed ? 'Undo' : 'Done'}
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TodoList;
