import React, { useState } from 'react';
import ErrorBoundary from './errorBoundary';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <ErrorBoundary>
      <div className="theme-toggle-container">
        {/* Theme Toggle Button */}
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

        {/* Dropdown Toggle Button */}
        <button 
          onClick={handleDropdownToggle} 
          className="dropdown-toggle"
          aria-label="Open navigation menu"
        >
          Menu
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/help-center">Help Center</a>
            <a href="/feedback">Feedback</a>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default ThemeToggle;