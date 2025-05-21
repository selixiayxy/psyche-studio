import React from 'react';
import '../Styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Main content - two columns */}
        <div className="footer-content">
          {/* Left Column - Logo Image */}
          <div className="footer-column logo-column">
            <div className="logo-container">
              <img src = {process.env.PUBLIC_URL + "/images/psyche-logo.png" } alt="PSCYCHE LOGO"></img>
            </div>
          </div>
          
          {/* Right Column - Contact Us */}
          <div className="footer-column contact-column">
            <h2 className="contact-heading">Contact Us</h2>
            <ul className="contact-list">
              <li><a href="mailto:info@psychestudio.com" className="contact-link">EMAIL</a></li>
              <li><a href="https://instagram.com/psychestudio" className="contact-link">INSTAGRAM</a></li>
              <li><a href="#redbook" className="contact-link">REDBOOK</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="copyright">
          <p>ALL RIGHT RESERVED @PSYCHESTUDIO</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;