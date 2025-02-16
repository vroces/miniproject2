// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <ul>
          <li><Link to="/about-us">About Us</Link></li> {/* Use Link component */}
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms-of-service">Terms of Service</Link></li>
          <li><Link to="/contact">Contact</Link></li> {/* Link to Contact page */}
        </ul>
        <p>&copy; 2025 ShePlays: Football. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
