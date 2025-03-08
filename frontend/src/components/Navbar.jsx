import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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
          CircularHub
        </NavLink>
        
        <button 
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      <div className={`nav-links ${isOpen ? 'show' : ''}`}>
        <NavLink 
          to="/about" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          About
        </NavLink>
        <NavLink 
          to="/knowledge-center" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          Knowledge
        </NavLink>
        <NavLink 
          to="/forum" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          Forum
        </NavLink>
        <div className="nav-actions">
          <NavLink 
            to="/login" 
            className="nav-button login-btn"
          >
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
    </nav>
  );
};

export default Navbar;