import React from 'react';

const PlayerCards = () => {
  // Sample player data, this could come from an API or a static array
  const players = [
    { id: 1, name: 'Alex Morgan', position: 'Forward', goals: 20, assists: 5 },
    { id: 2, name: 'Megan Rapinoe', position: 'Midfielder', goals: 15, assists: 10 },
    { id: 3, name: 'Kristie Mewis', position: 'Defender', goals: 5, assists: 15 },
  ];

  return (
    <div className="player-cards">
      <h2>Player Cards</h2>
      <div className="card-list">
        {players.map(player => (
          <div key={player.id} className="player-card">
            <h3>{player.name}</h3>
            <p>Position: {player.position}</p>
            <p>Goals: {player.goals}</p>
            <p>Assists: {player.assists}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerCards;
