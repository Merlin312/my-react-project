const DeleteAllTodos = ({ todo, addTodo }) => {
  const deleteAll = () => {
    alert('this action cannot be undone');
    addTodo([]);
  };
  return (
    <div>
      <button
        style={{
          color: 'rgba(100, 200, 200, 0.2)',
          padding: '0.5em 1em',
          backgroundColor: 'rgba(8, 0, 0, 0.2)',
          // marginTop: '10px',
          borderRadius: '6px',
          border: 'none',
          boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.2)',
        }}
        onClick={deleteAll}
      >
        DeleteAllTodo
      </button>
    </div>
  );
};
export default DeleteAllTodos;
