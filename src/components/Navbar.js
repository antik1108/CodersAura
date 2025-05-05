import React, { useState } from 'react';
import './Navbar.css';
import 'font-awesome/css/font-awesome.min.css';  // Importing Font Awesome Icons

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">
        Codersaura
      </div>

      {/* Navbar Links */}
      <ul className="nav-links">
        <li>
          <a
            href="#home"
            className={activeLink === 'home' ? 'active' : ''}
            onClick={() => handleLinkClick('home')}
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#products"
            className={activeLink === 'products' ? 'active' : ''}
            onClick={() => handleLinkClick('products')}
          >
            PRODUCTS
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeLink === 'about' ? 'active' : ''}
            onClick={() => handleLinkClick('about')}
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeLink === 'contact' ? 'active' : ''}
            onClick={() => handleLinkClick('contact')}
          >
            CONTACT
          </a>
        </li>
      </ul>

      {/* Right-side Icons for Cart and Watchlist */}
      <div className="navbar-icons">
        <i className="fa fa-heart icon" title="Watchlist"></i>
        <i className="fa fa-shopping-cart icon" title="Cart"></i>
  <i className="fa fa-user icon" title="Account"></i> {/* User icon */}

      </div>
    </nav>
  );
};

export default Navbar;
