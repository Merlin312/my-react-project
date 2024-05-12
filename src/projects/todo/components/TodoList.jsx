import './../style/TodoList.css';
const TodoList = ({ todo, addTodo }) => {
  const handleDelete = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    addTodo(newTodo);
  };
  return (
    <div>
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
                Del
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TodoList;
