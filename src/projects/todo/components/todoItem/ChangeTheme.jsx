import { useEffect, useState } from 'react';
import './../../style/ChangeTheme.css';

const ChangeTheme = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    // Отримуємо оновлене значення теми за допомогою функції оновлення
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
  // Виконуємо ефект при зміні значення теми
  useEffect(() => {
    const tedBody = document.querySelector('body');
    // Додаємо або видаляємо класи для зміни теми
    tedBody.classList.remove('light-theme', 'dark-theme');
    tedBody.classList.add(theme === 'light' ? 'light-theme' : 'dark-theme');
  }, [theme]);

  return (
    <div>
      <button
        className={`btnTheme ${theme === 'light' ? 'btnLight' : 'btnDark'}`}
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ChangeTheme;
