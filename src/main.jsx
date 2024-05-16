import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './initialStyle/index.css';
import { Provider } from 'react-redux';
import store from './projects/todo/components/store/store.js';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
