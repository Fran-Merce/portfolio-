import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { LangProvider } from './context/lang.context';

import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>
);
