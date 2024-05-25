import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { BaseColourProvider } from './contexts/baseColourContext.jsx';
import { CurrentThemeProvider } from './contexts/currentThemeContext.jsx';
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseColourProvider>
        <CurrentThemeProvider>
          <App />
        </CurrentThemeProvider>
      </BaseColourProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
