import React from 'react';
import HeroSec from "../assets/Herosec.jpg";
// import '../App.css';
import '../LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page-container">
      <h1 className="landing-page-header">This is a Landing Page</h1>
      <p className="landing-page-subheader">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <img src={HeroSec} alt="Hero" className="landing-page-hero" />

      <div className="feature-section">
        <h1 className="feature-title">Our Features</h1>
        <div className="feature-card">
          <div className="feature-item">
            <img src={HeroSec} alt="Feature" className="feature-image" />
            <p className="feature-text">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <button className="explore-button">Explore</button>
          </div>
          <div className="feature-item">
            <img src={HeroSec} alt="Feature" className="feature-image" />
            <p className="feature-text">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <button className="explore-button">Explore</button>
          </div>
          <div className="feature-item">
            <img src={HeroSec} alt="Feature" className="feature-image" />
            <p className="feature-text">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <button className="explore-button">Explore</button>
          </div>
          <div className="feature-item">
            <img src={HeroSec} alt="Feature" className="feature-image" />
            <p className="feature-text">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <button className="explore-button">Explore</button>
          </div>
          <div className="feature-item">
            <img src={HeroSec} alt="Feature" className="feature-image" />
            <p className="feature-text">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <button className="explore-button">Explore</button>
          </div>
          <div className="feature-item">
            <img src={HeroSec} alt="Feature" className="feature-image" />
            <p className="feature-text">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <button className="explore-button">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
