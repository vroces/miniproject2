import React from "react";
import PlayerCards from "../components/PlayerCards"; // Import PlayerCards component
import "../styles/PlayerCardsPage.css";
import LogoutButton from "../components/LogoutButton";
import HomeButton from "../components/HomeButton";

const PlayerCardsPage = () => {
  return (
    <div className="player-cards-wrapper">
      {/* Swipe Instructions */}
      <div className="swipe-instructions">
        <span className="swipe-left">❌ Swipe Left to Pass</span>
        <span className="swipe-right">Swipe Right to Follow Player</span>
      </div>

      <div className="player-cards-container">
        {/* Position buttons within the container */}
        <HomeButton />
        <LogoutButton />
        <PlayerCards /> {/* Use the PlayerCards component here */}
      </div>
    </div>
  );
};

export default PlayerCardsPage;
