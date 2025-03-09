import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiInfo, FiBook, FiMessageSquare, FiUser } from 'react-icons/fi';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus trap for mobile navigation
  useEffect(() => {
    if (isOpen) {
      const focusableElements = navRef.current.querySelectorAll('a, button');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKey = (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleTabKey);
      return () => document.removeEventListener('keydown', handleTabKey);
    }
  }, [isOpen]);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`} ref={navRef}>
      <div className="navbar-brand">
        <NavLink to="/" className="logo">
          <span className="logo-icon">♻️</span>
          CircularHub
        </NavLink>
        
        <button 
          className="hamburger" 
          onClick={handleMenuToggle} 
          aria-label="Menu" 
          aria-expanded={isOpen}
        >
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
          <ThemeToggle className="theme-toggle" />
          <div className="nav-actions">
            <NavLink 
              to="/login" 
              className="nav-button login-btn"
              onClick={() => setLoading(true)}
            >
              <FiUser className="nav-icon" />
              {loading ? 'Loading...' : 'Login'}
            </NavLink>
            <NavLink 
              to="/signup" 
              className="nav-button signup-btn"
              onClick={() => setLoading(true)}
            >
              {loading ? 'Loading...' : 'Sign Up'}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;