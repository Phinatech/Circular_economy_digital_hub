// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import App from './components/App'; // Verify this path

// Create a root instance
const container = document.getElementById('root');
const root = createRoot(container);

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);