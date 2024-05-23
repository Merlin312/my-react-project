const ButtonDone = () => {
  const handleCompleted = (index) => {
    // Створюємо новий масив, змінюючи статус завдання за індексом
    const newTodo = sortedTodo.map((item, i) => {
      if (i === index) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    // Оновлюємо стан todo
    addTodo(newTodo);
  };
  return (
    <div>
      <button className="btnDone" onClick={() => handleCompleted(index)}>
        {todoItem.completed ? 'UnDone' : 'Done'}
      </button>
    </div>
  );
};
export default ButtonDone;
