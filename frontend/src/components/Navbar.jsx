import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { 
  FiInfo, FiBook, FiMessageSquare, FiUser, FiChevronDown, 
  FiChevronUp, FiGrid, FiUsers, FiDownload, FiGlobe, FiSearch,
  FiSettings, FiTool, FiLogOut, FiChevronRight 
} from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../context/AuthContext';

const useDropdownState = (initialState = {}) => {
  const [dropdowns, setDropdowns] = useState(initialState);

  const toggleDropdown = useCallback((dropdown) => {
    setDropdowns(prev => ({
      ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {}), 
      [dropdown]: !prev[dropdown]
    }));
  }, []);

  return [dropdowns, toggleDropdown];
};

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { isAuthenticated, user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dropdowns, toggleDropdown] = useDropdownState({
    solutions: false,
    knowledge: false,
    community: false,
    resources: false,
    account: false,
    language: false
  });
  const location = useLocation();
  const navRef = useRef(null);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Close all dropdowns on route change or outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
        toggleDropdown('all');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [toggleDropdown]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        toggleDropdown('all');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [toggleDropdown]);

  useEffect(() => {
    return () => setLoading(false);
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    setSearchQuery('');
  };

  const navigationItems = [
    {
      name: t('solutions'),
      icon: FiGrid,
      dropdown: [
        { to: '/circular-solutions', name: t('circularSolutions') },
        { 
          name: t('wasteManagement'),
          submenu: [
            { to: '/e-waste', name: t('eWaste') },
            { to: '/plastic-recycling', name: t('plasticRecycling') }
          ]
        },
        { to: '/recycling-programs', name: t('recyclingPrograms') }
      ]
    },
    {
      name: t('knowledgeCenter'),
      icon: FiBook,
      dropdown: [
        { to: '/guides', name: t('guides') },
        { to: '/case-studies', name: t('caseStudies') },
        { to: '/research-papers', name: t('researchPapers') }
      ]
    },
    {
      name: t('community'),
      icon: FiUsers,
      dropdown: [
        { to: '/forum', name: t('forum') },
        { to: '/events', name: t('events') },
        { to: '/partners', name: t('partners') }
      ]
    },
    {
      name: t('resources'),
      icon: FiDownload,
      dropdown: [
        { to: '/downloads', name: t('downloads') },
        { to: '/calculators', name: t('calculators') },
        { to: '/api-docs', name: t('apiDocs') }
      ]
    }
  ];

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`} ref={navRef}>
      <div className="navbar-brand">
        <NavLink to="/" className="logo">
          <span className="logo-icon">♻️</span>
          CircularHub
        </NavLink>

        <form className="nav-search" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder={t('searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <FiSearch />
          </button>
        </form>

        <button 
          className="hamburger" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label={t('menu')}
          aria-expanded={isOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      <div className={`nav-links ${isOpen ? 'show' : ''}`}>
        <div className="nav-section">
          {navigationItems.map((item, index) => (
            <div className="nav-dropdown" key={index}>
              <button 
                className="nav-item"
                onClick={() => toggleDropdown(item.name)}
                onTouchStart={(e) => {
                  e.preventDefault();
                  window.innerWidth <= 768 && toggleDropdown(item.name);
                }}
                aria-expanded={dropdowns[item.name]}
                role="menuitem"
                onKeyDown={(e) => e.key === 'Enter' && toggleDropdown(item.name)}
              >
                <item.icon className="nav-icon" />
                <span>{item.name}</span>
                {dropdowns[item.name] ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              {dropdowns[item.name] && (
                <div className="dropdown-menu">
                  {item.dropdown.map((link, linkIndex) => (
                    <div key={linkIndex}>
                      {link.submenu ? (
                        <div className="nested-dropdown">
                          <button className="dropdown-item">
                            {link.name}
                            <FiChevronRight className="nested-arrow" />
                          </button>
                          <div className="nested-menu">
                            {link.submenu.map((sub, subIndex) => (
                              <NavLink
                                key={subIndex}
                                to={sub.to}
                                className="dropdown-item"
                                onClick={() => toggleDropdown('all')}
                              >
                                {sub.name}
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <NavLink
                          key={linkIndex}
                          to={link.to}
                          className="dropdown-item"
                          onClick={() => toggleDropdown('all')}
                        >
                          {link.name}
                        </NavLink>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="nav-dropdown">
            <button 
              className="nav-item"
              onClick={() => toggleDropdown('language')}
              aria-expanded={dropdowns.language}
            >
              <FiGlobe className="nav-icon" />
              {i18n.language.toUpperCase()}
            </button>
            {dropdowns.language && (
              <div className="dropdown-menu">
                {['en', 'es', 'fr'].map((lang) => (
                  <button
                    key={lang}
                    className="dropdown-item"
                    onClick={() => i18n.changeLanguage(lang)}
                  >
                    {t(`language.${lang}`)}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="nav-section">
          <ThemeToggle className="theme-toggle" />
          
          <div className="nav-dropdown">
            {isAuthenticated ? (
              <button 
                className="nav-button account-btn"
                onClick={() => toggleDropdown('account')}
                aria-expanded={dropdowns.account}
              >
                {user.avatar ? (
                  <img 
                    src={user.avatar} 
                    alt={t('userAvatar', { name: user.name })}
                    className="user-avatar"
                  />
                ) : (
                  <FiUser className="nav-icon" />
                )}
                <span>{user.name}</span>
                {dropdowns.account ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            ) : (
              <NavLink 
                to="/login" 
                className="nav-button login-btn"
                onClick={() => setLoading(true)}
              >
                <FiUser className="nav-icon" />
                {loading ? t('loading') : t('login')}
              </NavLink>
            )}

            {dropdowns.account && (
              <div className="dropdown-menu">
                <NavLink to="/profile" className="dropdown-item">
                  <FiUser className="nav-icon" />
                  {t('profile')}
                </NavLink>
                <NavLink to="/settings" className="dropdown-item">
                  <FiSettings className="nav-icon" />
                  {t('settings')}
                </NavLink>
                <button className="dropdown-item" onClick={() => {
                  logout();
                  toggleDropdown('account');
                }}>
                  <FiLogOut className="nav-icon" />
                  {t('logout')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;