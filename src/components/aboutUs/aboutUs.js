import React from "react";
import { useNavigate } from "react-router-dom";
import aboutusImg from "../../assets/aboutusImage.png";
import "./aboutUs.css";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="about-container">
      <div className="about-text">
        <h2>About Us</h2>
        <p className="about-description">
          We specialize in providing unforgettable experiences in Ethiopia, from breathtaking landscapes to rich cultural heritage.
        </p>
        <button className="button" onClick={handleBackToHome}>
          Back to Home
        </button>
      </div>
      <div className="about-image">
        <img src={aboutusImg} alt="Ethiopian Landscape" className="image" />
      </div>
    </div>
  );
};

export default AboutUs;
