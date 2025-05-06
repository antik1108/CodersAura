import React from 'react';
import './Contact.css';
import Navbar from './Navbar.js';
import serviceImage from '../assets/service.png';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-main-wrapper">
        <div className="contact-header-section">
          <h1 className="contact-title">CONTACT US</h1>
          <p className="contact-desc-pro">
            LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.
          </p>
  
        </div>
        <div className="contact-body-section">
          <div className="contact-left-pro">
            <div className="contact-methods-pro">
              <button className="contact-btn-pro">
                <span className="contact-btn-icon" role="img" aria-label="chat">💬</span> VIA SUPPORT CHAT
              </button>
              <button className="contact-btn-pro">
                <span className="contact-btn-icon" role="img" aria-label="call">📞</span> VIA CALL
              </button>
            </div>
            <div className="contact-form-box-pro">
              <div className="form-label-pro">
                <span className="contact-btn-icon" role="img" aria-label="email">💬</span> VIA EMAIL FORM
              </div>
              <form className="contact-form-pro">
                <label>Name
                  <input type="text" name="name" required />
                </label>
                <label>E-Mail
                  <input type="email" name="email" required />
                </label>
                <label>TEXT
                  <textarea name="message" rows="4" required></textarea>
                </label>
                <button type="submit" className="submit-btn-pro">SUBMIT</button>
              </form>
            </div>
          </div>
          <div className="contact-right-pro">
            <img src={serviceImage} alt="24/7 Service" className="service-img-pro" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
