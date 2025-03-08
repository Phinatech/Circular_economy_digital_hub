import { Link } from 'react-router-dom';
import './Footer.css'; // Optional CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <Link to="/knowledge-center">Knowledge Center</Link>
          <Link to="/forum">Community Forum</Link>
          <Link to="/feedback">Feedback</Link>
        </div>
        <div className="footer-section">
          <p>© 2024 CircularHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;