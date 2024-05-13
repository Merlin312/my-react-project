import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [theme, setTheme] = useState('light');

  return (
    <div>
      <TodoItem theme={theme} setTheme={setTheme} />
      <TodoForm todo={todo} addTodo={setTodo} />
      <TodoList todo={todo} addTodo={setTodo} />
    </div>
  );
};
export default Todo;
