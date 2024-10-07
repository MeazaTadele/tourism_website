import React from 'react';
import { useNavigate } from "react-router-dom";
import harennaForest from '../../assets/harennaForest.png';
import Navbar from '../navbar/navbar';
import './heroSection.css';

function HeroSection() {
  const navigate = useNavigate();

  const handleAboutPageNavigation = () => {
    navigate("/about");
  };

  return (
    <div className="hero-background" style={{ backgroundImage: `url(${harennaForest})` }}>
      <div className="hero-content">
        <Navbar />
        <div className="hero-container">
          <div className="hero-main">
            <p className="hero-subtitle">A Journey of Discovery</p>
            <div className="hero-text-content">
              <p className="hero-title">Explore Ethiopia</p>
              <p className="hero-description">
                Ethiopia offers ancient history, diverse cultures, and breathtaking
                landscapes like the Danakil Depression, Aksum, and the Simien Mountains.
              </p>
            </div>
            <button className="button" onClick={handleAboutPageNavigation}>Learn More</button>
          </div>
          <div className="hero-location">
            <div className="location-info">
              <h2>Harenna Forest</h2>
              <p>Bale Mountains</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
