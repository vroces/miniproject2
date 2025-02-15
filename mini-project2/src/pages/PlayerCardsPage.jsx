import React from 'react';
import PlayerCards from '../components/PlayerCards'; // Import PlayerCards component
import NavWithProfile from '../components/NavWIthProfile';

const PlayerCardsPage = () => {
  return (
    
    <div>
      <NavWithProfile/>
      <PlayerCards /> {/* Use the PlayerCards component here */}
    </div>
  );
};

export default PlayerCardsPage;
