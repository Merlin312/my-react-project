import { useState } from 'react';

const TodoForm = ({ addTodo, todo }) => {
  const [value, setValue] = useState('');
  const handleValue = (event) => {
    setValue(event.target.value) || '';
  };
  const handleAddTask = () => {
    const newTodo = [...todo, value];
    addTodo(newTodo) || setValue('');
  };
  return (
    <div>
      <input
        value={value}
        onChange={handleValue}
        placeholder="wrtie your task"
        type="text"
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};
export default TodoForm;
