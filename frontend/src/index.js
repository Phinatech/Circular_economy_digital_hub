// src/index.js
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { createRoot } from 'react-dom/client'; // Updated import
import App from './components/App'; // Verify this path

// Create a root instance
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);