import React from 'react';
import ertaale from '../../assets/ertaale.png';
import hayena from '../../assets/feeding_hayena.png';
import planeIcon from '../../assets/plane.png';
import './aboutEthiopia.css';

const AboutEthiopia = () => (
  <section className="about-ethiopia">
    <div className="about-ethiopia__images">
      <div className="about-ethiopia__image-container">
        <img src={ertaale} alt="Erta Ale Volcano" className="about-ethiopia__image about-ethiopia__image--large" />
        <img src={hayena} alt="Feeding Hyena" className="about-ethiopia__image about-ethiopia__image--small" />
      </div>
      <img src={planeIcon} alt="Plane Icon" className="about-ethiopia__plane-icon about-ethiopia__plane-icon--1" />
      <img src={planeIcon} alt="Plane Icon" className="about-ethiopia__plane-icon about-ethiopia__plane-icon--2" />
    </div>

    <div className="about-ethiopia__content">
      <h4 className="about-ethiopia__tagline">A journey like no other</h4>
      <h2 className="about-ethiopia__title">Discover Timeless Ethiopia</h2>
      <p className="about-ethiopia__description">
        Ethiopia is a land of ancient history, diverse cultures, and natural wonders. Explore the vibrant traditions
        of over 80 unique tribes, hike the highlands, or witness the dramatic landscapes shaped by time.
      </p>

      <div className="about-ethiopia__stats">
        <div className="about-ethiopia__stat-card">
          <span className="about-ethiopia__stat-number">600+</span>
          <p className="about-ethiopia__stat-text">Majestic Landscapes</p>
        </div>
        <div className="about-ethiopia__stat-card">
          <span className="about-ethiopia__stat-number">80+</span>
          <p className="about-ethiopia__stat-text">Unique Tribes</p>
        </div>
        <div className="about-ethiopia__stat-card">
          <span className="about-ethiopia__stat-number">10k+</span>
          <p className="about-ethiopia__stat-text">Years of History</p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutEthiopia;
