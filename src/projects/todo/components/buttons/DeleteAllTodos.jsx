const DeleteAllTodos = ({ todo, addTodo }) => {
  const deleteAll = () => {
    console.log(todo);
  };
  return (
    <div>
      <button onClick={deleteAll}>Del</button>
    </div>
  );
};
export default DeleteAllTodos;
