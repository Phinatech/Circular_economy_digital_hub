import { Link } from 'react-router-dom';
import './NotFound.css'; // We'll create this CSS file

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-graphic">
          <svg viewBox="0 0 200 200" className="error-icon">
            <circle cx="100" cy="100" r="90" fill="#f8f9fa" />
            <path 
              d="M70,40 L130,160 M130,40 L70,160" 
              stroke="#e74c3c" 
              strokeWidth="8"
              strokeLinecap="round"
            />
            <text x="100" y="110" textAnchor="middle" fontSize="24" fill="#2c3e50">
              404
            </text>
          </svg>
        </div>
        
        <h1 className="error-title">Oops! Page Not Found</h1>
        <p className="error-message">
          The page you're looking for seems to have disappeared into the circular economy void.
          Let's help you get back on track!
        </p>
        
        <div className="cta-section">
          <Link to="/" className="home-button">
            Return to Home
          </Link>
          <div className="alternative-links">
            <p>Or try these pages:</p>
            <div className="link-group">
              <Link to="/knowledge-center">Knowledge Center</Link>
              <Link to="/forum">Community Forum</Link>
              <Link to="/contact">Contact Support</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;