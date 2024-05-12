import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

const Todo = () => {
  const [todo, setTodo] = useState([]);
  return (
    <div>
      <TodoItem />
      <TodoForm todo={todo} addTodo={setTodo} />
      <TodoList todo={todo} addTodo={setTodo} />
    </div>
  );
};
export default Todo;
