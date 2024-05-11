import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const Todo = () => {
  const [todo, setTodo] = useState(['3', '22323', 'secotn']);
  return (
    <div>
      <h1>It's my todo App</h1>
      <TodoForm todo={todo} addTodo={setTodo} />
      <TodoList todo={todo} />
    </div>
  );
};
export default Todo;
