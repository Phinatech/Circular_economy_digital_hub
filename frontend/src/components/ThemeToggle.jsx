import React from 'react';
import ErrorBoundary from './errorBoundary';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ErrorBoundary>
      <button 
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        <div className={`toggle-track ${isDarkMode ? 'dark' : 'light'}`}>
          <div className="toggle-thumb"></div>
        </div>
        <span className="toggle-label">
          {isDarkMode ? '🌙' : '☀️'}
        </span>
      </button>
    </ErrorBoundary>
  );
};

export default ThemeToggle;