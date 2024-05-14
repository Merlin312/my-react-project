import { useState } from 'react';

const ComplatedButton = ({ todo, addTodo }) => {
  const markAllAsCompleted = () => {
    const updatedTodos = todo.map((item) => {
      return { ...item, completed: true };
    });
    addTodo(updatedTodos);
  };
  return (
    <div>
      {' '}
      <button onClick={markAllAsCompleted}>DoneEvrenthing</button>{' '}
    </div>
  );
};
export default ComplatedButton;
