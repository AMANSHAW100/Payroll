import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AppNavigator.css';
import { FaHome, FaInfoCircle, FaPhone, FaBars, FaUser } from 'react-icons/fa';
import logo from '../image/logo.png'; // Ensure the path is correct

const Navigator = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="nav-logo" />
        </Link>
      </div>

      {/* Hamburger Menu (for mobile) */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars className="menu-icon" />
      </div>

      {/* Navigation Links */}
      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <FaHome className="nav-icon" /> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <FaInfoCircle className="nav-icon" /> About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            <FaPhone className="nav-icon" /> Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="https://vauras.cloud/login" className="nav-link">
            <FaUser className="nav-icon" /> Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;