import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'; // Optional CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">CircularHub</Link>
      <div className="nav-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'active-link' : ''}
        >Home</NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? 'active-link' : ''}
        >About</NavLink>
        <NavLink 
          to="/knowledge-center" 
          className={({ isActive }) => isActive ? 'active-link' : ''}
        >Knowledge Center</NavLink>
        <NavLink 
          to="/forum" 
          className={({ isActive }) => isActive ? 'active-link' : ''}
        >Forum</NavLink>
        <NavLink 
          to="/login" 
          className="login-btn" // Style this in CSS
        >Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;