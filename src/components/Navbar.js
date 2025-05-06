import React from 'react';
import './Navbar.css';
import 'font-awesome/css/font-awesome.min.css'; 
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        Codersaura
      </div>

      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => isActive ? 'active' : ''}
          >HOME</NavLink>
        </li>
        <li>
          <a
            href="#products"
          >PRODUCTS</a>
        </li>
        <li>
          <a
            href="#about"
          >ABOUT</a>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? 'active' : ''}
          >CONTACT</NavLink>
        </li>
      </ul>


      <div className="navbar-icons">
        <i className="fa fa-heart icon" title="Watchlist"></i>
        <i className="fa fa-shopping-cart icon" title="Cart"></i>
        <i className="fa fa-user icon" title="Account"></i> {/* User icon */}
      </div>
    </nav>
  );
};

export default Navbar;
