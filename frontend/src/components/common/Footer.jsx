import React from 'react';
import './Footer.css'; // Assuming a CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>About Us</h3>
                    <img src="/path/to/logo.png" alt="CircularHub Logo" />
                    <p>Empowering sustainable action through education and collaboration.</p>
                    <a href="/about" className="footer-link">Learn More →</a>
                </div>
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/knowledge-center">Knowledge Center</a></li>
                        <li><a href="/dashboard">Project Dashboard</a></li>
                        <li><a href="/events">Event Calendar</a></li>
                        <li><a href="/campus-map">Campus Map</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="/guides">Downloadable Guides</a></li>
                        <li><a href="/partners">Partner Organizations</a></li>
                        <li><a href="/faqs">FAQs</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Connect</h3>
                    <div className="social-media">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
                    </div>
                    <p>Contact: sustainability@circularhub.org</p>
                    <p>Phone: +250 789 000 000</p>
                    <form>
                        <input type="email" placeholder="Subscribe to our newsletter" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 CircularHub | Built by Team EcoInnovators.</p>
                <div className="partner-logos">
                    {/* Add partner logos here */}
                </div>
                <div className="legal-links">
                    <a href="/terms">Terms of Service</a> | 
                    <a href="/privacy-policy">Privacy Policy</a> | 
                    <a href="/cookie-policy">Cookie Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
