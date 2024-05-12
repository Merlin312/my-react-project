import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const Todo = () => {
  const [todo, setTodo] = useState([]);
  return (
    <div>
      <TodoForm todo={todo} addTodo={setTodo} />
      <TodoList todo={todo} addTodo={setTodo} />
    </div>
  );
};
export default Todo;
