import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navbarBrandStyle = {
    fontFamily: 'YourCustomFont',
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#ff1493',
    transition: 'color 0.5s ease-in-out',
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div>
          <Link className="navbar-brand" to="/logo" style={navbarBrandStyle}>
            Y<span>uvraj</span>
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/education">
                Education
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/project">
                Projects
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/contact">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
  