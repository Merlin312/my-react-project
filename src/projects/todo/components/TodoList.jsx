import { useEffect, useState } from 'react';
import './../style/TodoList.css';
import { useDispatch, useSelector } from 'react-redux';
import DeleteAllTodos from './buttons/DeleteAllTodos';

const TodoList = ({ todo, addTodo, theme }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Створюємо стан для відсортованого масиву todo
  const [sortedTodo, setSortedTodo] = useState([]);

  // Функція для видалення завдання за індексом
  const handleDelete = (index) => {
    // Створюємо копію масиву todo
    const newTodo = todo.slice();
    // Видаляємо елемент з масиву за індексом
    newTodo.splice(index, 1);
    // Оновлюємо стан todo
    addTodo(newTodo);
  };

  // Функція для зміни статусу завершення завдання
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

  // Ефект для сортування завдань при зміні масиву todo
  useEffect(() => {
    // Сортуємо масив todo за статусом завершення
    const sorted = [...todo].sort((a, b) => a.completed - b.completed);
    // Оновлюємо відсортований масив todo
    setSortedTodo(sorted);
  }, [todo]);

  return (
    <div>
      {/* Виводимо заголовок, якщо є завдання */}
      {todo.length >= 1 && (
        <h1
          style={{ color: theme === 'light' ? 'rgb(63, 112, 112)' : 'azure' }}
        >
          Todo list:
        </h1>
      )}

      {/* Виводимо список завдань */}
      <ul>
        {sortedTodo.map((todoItem, index) => (
          <li
            key={index}
            style={{
              // Змінюємо стиль тексту в залежності від статусу завдання
              textDecoration: todoItem.completed ? 'line-through' : 'none',
              color: todoItem.completed ? 'rgb(31, 45, 45)' : 'rgb(41, 45, 45)',
            }}
          >
            <div>
              {/* Додаємо коло, якщо завдання виконано */}
              <span
                className="circle"
                style={{
                  backgroundColor: todoItem.completed
                    ? '#4CAF50'
                    : 'transparent',
                }}
              ></span>
              {/* Виводимо текст завдання */}
              {todoItem.text}
            </div>
            <div>
              {/* Кнопка для зміни статусу завдання */}
              <button
                className="btnDone"
                onClick={() => handleCompleted(index)}
              >
                {todoItem.completed ? 'UnDone' : 'Done'}
              </button>
              {/* Кнопка для видалення завдання */}
              <button
                className="delete-button"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
        {sortedTodo.length >= 10 && (
          <DeleteAllTodos todo={todo} addTodo={addTodo} />
        )}
      </ul>
    </div>
  );
};

export default TodoList;
