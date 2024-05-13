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
            <li key={index}>
              {todos.text}
              <button
                className="btnDone"
                onClick={() => handleCompleted(index)}
              >
                {todos.completed ? 'Undo' : 'Done'}
              </button>
              {console.log(todos.completed)}
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
