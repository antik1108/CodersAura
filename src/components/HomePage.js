import React from 'react';
import './HomePage.css'; 
import productImage from '../assets/codersaura-logo.png'; 

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="hero-content">
        <div className="text-section">
          <h1>YOUR CODE DESERVES<br />A SMOOTH RIDE</h1>
          <p>CodersAura – A Developer Merchandise Store</p>
          <button className="shop-btn">Shop Now</button>
        </div>
        <div className="image-section">
          <img src={productImage} alt="Product" className="product-img" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
