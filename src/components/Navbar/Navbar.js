import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src='./logo.png' alt="Cyber Quest" />
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/home" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/careerquiz" activeClassName="active" exact>
            Career Quiz 
          </NavLink>
        </li>
        <li>
          <NavLink to="/tipsandtricks" activeClassName="active">
          Tips and Tricks
          </NavLink>
        </li>
        <li>
          <NavLink to="/toolkit" activeClassName="active">
          Cybersecurity ToolKit
          </NavLink>
        </li>
      </ul>
      <div
        className={`navbar-hamburger ${isMobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
