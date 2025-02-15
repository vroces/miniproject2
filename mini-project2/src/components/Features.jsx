import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Features = () => {
  return (
    <section className="features">
      <div className="feature-card">
        <Link to="/gameday">
          <h3>Gameday</h3>
          <p>Stay up-to-date with all the latest games across the globe.</p>
        </Link>
      </div>
      <div className="feature-card">
        <Link to="/where-we-play">
          <h3>Where We Play</h3>
          <p>Explore teams around the world with our interactive map. Explore where we play!</p>
        </Link>
      </div>
      <div className="feature-card">
        <Link to="/master-your-game">
          <h3>Master Your Game</h3>
          <p>
            Transform your approach to football with training that boosts both
            your game and your mentality.
          </p>
        </Link>
      </div>
    </section>
  );
};


export default Features;
