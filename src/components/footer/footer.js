import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-address">
        <p>
          1000 Addis Ababa, Ethiopia.
          <br />
          6000 Bahir Dar, Ethiopia
        </p>
        <div className="footer-social-icons">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
          <a href="#"><i className="fa fa-youtube"></i></a>
        </div>
      </div>

      <div className="footer-about">
        <h4>About</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Plans</a></li>
        </ul>
      </div>

      <div className="footer-company">
        <h4>Company</h4>
        <ul>
          <li><a href="#">Why Tripy</a></li>
          <li><a href="#">Partner with Us</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>

      <div className="footer-support">
        <h4>Support</h4>
        <ul>
          <li><a href="#">Account</a></li>
          <li><a href="#">Support Center</a></li>
          <li><a href="#">Feedback</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      <div className="footer-newsletter">
        <h4>Newsletter</h4>
        <p>Subscribe to our newsletter and get exciting offers.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email address" />
          <button><i className="fa fa-arrow-right"></i></button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
