import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import bridge from '@vkontakte/vk-bridge';

bridge.send('VKWebAppInit')
  .then((data) => { 
    if (data.result) {
      // Приложение инициализировано
    } else {
      // Ошибка
    }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
