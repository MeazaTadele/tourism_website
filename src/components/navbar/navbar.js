import React from 'react';
import logo from '../../assets/logo.png';
import searchIcon from '../../assets/search_icon.svg';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Blogs</a></li>
      </ul>
      <div className="navbar-actions">
        <div className="navbar-search">
          <img src={searchIcon} alt="Search Icon" />
        </div>
        <button className="navbar-signin-button">Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;
