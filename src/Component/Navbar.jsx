import React, { useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">📦</span>
          <span className="logo-text">PackageHub</span>
        </div>
        
        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className={`navbar-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className={`navbar-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}>Contact us</Link>
          </li>
        </ul>
        
        <div 
          className="navbar-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;