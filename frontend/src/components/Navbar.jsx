import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiInfo, FiBook, FiMessageSquare, FiUser } from 'react-icons/fi';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.navbar')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-brand">
        <NavLink to="/" className="logo">
          <span className="logo-icon">♻️</span>
          CircularHub
        </NavLink>
        
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      <div className={`nav-links ${isOpen ? 'show' : ''}`}>
        {/* Main Navigation */}
        <div className="nav-section">
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <FiInfo className="nav-icon" />
            About
          </NavLink>
          <NavLink 
            to="/knowledge-center" 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <FiBook className="nav-icon" />
            Knowledge Center
          </NavLink>
          <NavLink 
            to="/forum" 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <FiMessageSquare className="nav-icon" />
            Forum
          </NavLink>
        </div>

        {/* User & Settings */}
        <div className="nav-section">
          <ThemeToggle />
          <div className="nav-actions">
            <NavLink 
              to="/login" 
              className="nav-button login-btn"
            >
              <FiUser className="nav-icon" />
              Login
            </NavLink>
            <NavLink 
              to="/signup" 
              className="nav-button signup-btn"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;