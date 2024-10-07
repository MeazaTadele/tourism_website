import React from 'react';
import aksum from '../../assets/aksum.png';
import danakil from '../../assets/danakil.png';
import fasil from '../../assets/fasil.png';
import harar from '../../assets/harar.png';
import icon from '../../assets/icon.svg';
import omo from '../../assets/omo.png';
import simen from '../../assets/simen.png';
import './popularDestination.css';

const PopularDestination = () => (
  <section className="popular-destination-section">
    <h2>Popular Destinations</h2>
    <p className="destination-description">
      Discover the captivating beauty of Ethiopia, from the majestic peaks of the Simien Mountains to the lush valleys and ancient landmarks that tell a rich story of history and culture.
    </p>
    <div className="destination-card-container">
      
      {/* Column 1 */}
      <div className="destination-column">
        <div className="destination-card large-card" style={{ backgroundImage: `url(${danakil})` }}>
          <div className="card-overlay">
            <h3>Danakil Depression</h3>
            <p>One of the hottest and most inhospitable places on Earth, located in northeastern Ethiopia.</p>
            <div className="icon-container-large"><img src={icon} alt="Explore Icon" /></div>
          </div>
        </div>
        <div className="destination-card medium-card" style={{ backgroundImage: `url(${omo})` }}>
          <div className="card-overlay">
            <h3>Omo Valley</h3>
            <p>A place of unique cultural heritage, home to diverse indigenous tribes.</p>
            <div className="icon-container-medium"><img src={icon} alt="Explore Icon" /></div>
          </div>
        </div>
      </div>

      {/* Column 2 */}
      <div className="destination-column">
        <div className="destination-card small-card" style={{ backgroundImage: `url(${aksum})` }}>
          <div className="card-overlay">
            <h3>Aksum</h3>
            <p>An ancient city rich with historical treasures and ancient stelae.</p>
            <div className="icon-container-small"><img src={icon} alt="Explore Icon" /></div>
          </div>
        </div>
        <div className="destination-card large-card" style={{ backgroundImage: `url(${harar})` }}>
          <div className="card-overlay">
            <h3>Harar</h3>
            <p>A historic walled city in eastern Ethiopia, known for its ancient mosques.</p>
            <div className="icon-container-large"><img src={icon} alt="Explore Icon" /></div>
          </div>
        </div>
        <button className="button">See all tours</button>
      </div>

      {/* Column 3 */}
      <div className="destination-column">
        <div className="destination-card large-card" style={{ backgroundImage: `url(${fasil})` }}>
          <div className="card-overlay">
            <h3>Fasil Ghebbi</h3>
            <p>A UNESCO World Heritage site featuring medieval castles and churches, a testament to Ethiopia’s royal past.</p>
            <div className="icon-container-large"><img src={icon} alt="Explore Icon" /></div>
          </div>
        </div>
        <div className="destination-card medium-card" style={{ backgroundImage: `url(${simen})` }}>
          <div className="card-overlay">
            <h3>Simien Mountains</h3>
            <p>A breathtaking landscape of jagged peaks and deep valleys.</p>
            <div className="icon-container-medium"><img src={icon} alt="Explore Icon" /></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PopularDestination;
