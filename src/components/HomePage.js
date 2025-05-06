import React from 'react';
import './HomePage.css'; 
import productImage from '../assets/codersaura-logo.png'; 
import Navbar from './Navbar.js';


const HomePage = () => {
  return (
    <>
    <Navbar/>
    <div className="home-container">
      <div className="hero-content">
        <div className="text-section">
          <h1>YOUR CODE DESERVES<br />A SMOOTH RIDE</h1>
          <p>CodersAura – Gear Up Like a Dev, Game Like a Pro, Live the Tech Life</p>
          <button className="shop-btn">Shop Now</button>
        </div>
        <div className="image-section">
          <img src={productImage} alt="Product" className="product-img" />
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;
