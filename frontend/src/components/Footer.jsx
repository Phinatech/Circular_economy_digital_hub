import { Link } from 'react-router-dom';
import './Footer.css'; // Optional CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Company</h4>
          <nav className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/press">Press</Link>
          </nav>
        </div>
        
        <div className="footer-section">
          <h4>Resources</h4>
          <nav className="footer-links">
            <Link to="/docs">Documentation</Link>
            <Link to="/tutorials">Tutorials</Link>
            <Link to="/api">API Reference</Link>
            <Link to="/status">System Status</Link>
          </nav>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="#" aria-label="Discord"><i className="fab fa-discord"></i></a>
          </div>
        </div>
      </div>
      
      <div className="footer-copyright">
        © 2024 Your Brand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;