import { useState } from 'react';

const ComplatedButton = ({ todo, addTodo }) => {
  const [done, setDone] = useState(true);
  const markAllAsCompleted = () => {
    setDone(done == true ? false : true);
    const changeComplated = todo.map((item) => {
      if (done) {
        return { ...item, completed: true };
      } else {
        return { ...item, completed: false };
      }
    });
    console.log(done);
    addTodo(changeComplated);
  };
  return (
    <div>
      <button
        onClick={markAllAsCompleted}
        style={{
          color: 'rgba(100, 200, 200, 0.2)',
          padding: '0.5em 1em',
          backgroundColor: 'rgba(8, 0, 0, 0.2)',
          marginTop: '10px',
          borderRadius: '6px',
          border: 'none',
          boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        {done == true ? 'DoneAll' : 'UndoneAll'}
      </button>
    </div>
  );
};
export default ComplatedButton;
