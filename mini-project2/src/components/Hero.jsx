import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Hero = () => {
    return (
      <section className="hero">
        <div className="hero-content">
          <h2>Empowering Women in Football</h2>
          <p>Discover player cards with detailed profiles, stats, and more.</p>
          <Link to="/player-cards" className="cta-button">Discover</Link>
        </div>
      </section>
    );
  };
  
  export default Hero;
  