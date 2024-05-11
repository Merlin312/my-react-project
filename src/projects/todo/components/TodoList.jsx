const TodoList = ({ todo }) => {
  return (
    <div>
      <h1>Todo list:</h1>
      <ul>
        {todo.map((todos, index) => {
          return <li key={index}>{todos}</li>;
        })}
      </ul>
    </div>
  );
};
export default TodoList;
