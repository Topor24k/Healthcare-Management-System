import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">MINDBRIDGE</h3>
            <p className="footer-tagline">
              A bridge of hope, a reminder that you are never truly alone.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#journeys">Journeys</a></li>
                <li><a href="#about">About Us</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#crisis">Crisis Resources</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li><a href="mailto:support@mindbridge.com">Email</a></li>
                <li><a href="tel:123-456-7890">Hotline: 123-456-7890</a></li>
                <li><a href="#social">Social Media</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Mind Bridge. All rights reserved.</p>
          <p>Developed with ❤️ by Kayeen M. Campaña</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
