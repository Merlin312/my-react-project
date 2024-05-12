import { useState } from 'react';
import './../style/TodoForm.css';

const TodoForm = ({ addTodo, todo }) => {
  const [value, setValue] = useState('');
  const handleValue = (event) => {
    setValue(event.target.value) || '';
  };
  const handlePressEnter = (event) => {
    if (event.key == 'Enter') handleAddTask();
  };
  const handleAddTask = () => {
    if (value.trim() !== '') {
      const newTodo = [...todo, value];
      addTodo(newTodo) || setValue('');
    } else {
      console.log('The field cannot be empty.');
      alert('The field cannot be empty.');
    }
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        onKeyPress={handlePressEnter}
        onChange={handleValue}
        placeholder="wrtie your task"
      />
      <button type="submit" onClick={handleAddTask}>
        Add
      </button>
    </div>
  );
};
export default TodoForm;
