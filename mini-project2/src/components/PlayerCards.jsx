import React, { useState } from 'react';
import PlayerCard from './PlayerCard';
import '../styles/PlayerCardsPage.css';

const PlayerCards = () => {
  const [players, setPlayers] = useState([
    {
      name: 'Alex Morgan',
      position: 'Forward',
      profilePic: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Third_Photos_116_%2850832400503%29_%28cropped%29.jpg',
      bio: 'Alex Morgan is a professional soccer player known for her scoring ability and leadership.',
      location: 'California, USA',
    },
    {
      name: 'Megan Rapinoe',
      position: 'Midfielder',
      profilePic: 'https://upload.wikimedia.org/wikipedia/commons/6/60/JasonKelce.jpg',
      bio: 'Megan Rapinoe is a skilled and passionate midfielder known for her technical skills.',
      location: 'Seattle, USA',
    },
    {
      name: 'Sam Mewis',
      position: 'Midfielder',
      profilePic: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Saquon_Barkley_112024.jpg',
      bio: 'Sam Mewis is a talented midfielder with excellent passing and vision.',
      location: 'Boston, USA',
    },
  ]);

  const handleSwipeLeft = (player) => {
    console.log(`${player.name} swiped left (Not following)`);
    setPlayers((prev) => prev.filter((p) => p.name !== player.name));
  };

  const handleSwipeRight = (player) => {
    console.log(`${player.name} swiped right (Following)`);
    setPlayers((prev) => prev.filter((p) => p.name !== player.name));
  };

  return (
    <div className="player-cards-container">
      {players.map((player, index) => (
        <PlayerCard
          key={player.name}
          player={player}
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
        />
      ))}
    </div>
  );
};

export default PlayerCards;
