import React from "react";
import "../styles/GamedayPageStyles.css"; // Your styles
import SubHeader from "../components/SubHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";

const GameDay = () => {
  return (
    <div className="gameday-page-container">
      <Header /> {/* Top Header */}
      
      <div className="gameday-content">
        {/* Your content goes here */}
        <h1>Welcome to GameDay</h1>
        <p>This is where the game content will be displayed.</p>
      </div>
      <Footer /> {/* Footer at the bottom */}
    </div>
  );
};

export default GameDay;
