import { useEffect, useState } from 'react';
import './../../style/ChangeTheme.css';

const ChangeTheme = () => {
  const [theme, setTheme] = useState('light');

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
      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* <h1>Theme: {theme}</h1> */}
    </div>
  );
};

export default ChangeTheme;
