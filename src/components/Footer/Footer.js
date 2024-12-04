import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Stay Connected</h2>
      <p>Follow us for more updates and resources!</p>
      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#privacy">Privacy</a>
      </div>
      <div className="footer-credit">
        <p>© 2024 Your Website Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
