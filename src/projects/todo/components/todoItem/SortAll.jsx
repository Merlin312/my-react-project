import React from 'react';

const SortAll = ({ todo, addTodo }) => {
  const handleSortAll = () => {
    const newTodo = [...todo].sort((a, b) => {
      return a.text.localeCompare(b.text);
    });
    addTodo(newTodo);
  };

  return (
    <div>
      <button
        style={{
          color: 'rgba(100, 200, 200, 0.2)',
          padding: '0.5em 1em',
          backgroundColor: 'rgba(8, 0, 0, 0.2)',
          marginTop: '10px',
          borderRadius: '6px',
          border: 'none',
          boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.2)',
        }}
        onClick={handleSortAll}
      >
        Sort All
      </button>
    </div>
  );
};

export default SortAll;
