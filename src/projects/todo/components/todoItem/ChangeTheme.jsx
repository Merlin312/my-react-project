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
    const bodyTag = document.querySelector('body');

    // Додаємо або видаляємо класи для зміни теми
    bodyTag.classList.remove(theme === 'light' ? 'dark-theme' : 'light-theme');
    bodyTag.classList.add(theme === 'light' ? 'light-theme' : 'dark-theme');
  }, [theme]);

  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Theme: {theme}</h1>
    </div>
  );
};

export default ChangeTheme;
