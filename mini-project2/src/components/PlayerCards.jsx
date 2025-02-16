import React, { useState } from 'react';
import PlayerCard from './PlayerCard';
import '../styles/PlayerCardsPage.css';

const PlayerCards = () => {
  const originalPlayers = [
    {
      name: 'Kristen Kelce',
      position: 'Linebacker',
      profilePic: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Third_Photos_116_%2850832400503%29_%28cropped%29.jpg',
      bio: 'Alex Morgan is a professional soccer player known for her scoring ability and leadership.',
      location: 'California, USA',
      team: 'Blazers',
    },
    {
      name: 'Megan London',
      position: 'Running Back',
      profilePic: 'https://upload.wikimedia.org/wikipedia/commons/6/60/JasonKelce.jpg',
      bio: 'Megan Rapinoe is a skilled and passionate midfielder known for her technical skills.',
      location: 'Mexico City, Mexico',
      team: 'Blazers',
    },
    {
      name: 'Lisa Knight',
      position: 'Quarterback',
      profilePic: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Saquon_Barkley_112024.jpg',
      bio: 'Sam Mewis is a talented midfielder with excellent passing and vision.',
      location: 'Boston, USA',
      team: 'Blazers',
    },
    {
      name: 'John Doe',
      position: 'Wide Receiver',
      profilePic: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Third_Photos_116_%2850832400503%29_%28cropped%29.jpg', // Same image as Kristen Kelce
      bio: 'John Doe is a strong and dynamic player known for his speed and precision.',
      location: 'New York, USA',
      team: 'Blazers',
    },
    {
      name: 'Jane Smith',
      position: 'Tight End',
      profilePic: 'https://upload.wikimedia.org/wikipedia/commons/6/60/JasonKelce.jpg', // Same image as Megan London
      bio: 'Jane Smith is a skilled player with a reputation for making impressive catches.',
      location: 'Los Angeles, USA',
      team: 'Blazers',
    },
    {
      name: 'Tom Wilson',
      position: 'Kicker',
      profilePic: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Saquon_Barkley_112024.jpg', // Same image as Lisa Knight
      bio: 'Tom Wilson is a reliable kicker with a history of clutch performances.',
      location: 'Chicago, USA',
      team: 'Blazers',
    },
    {
      name: 'Sally Thomas',
      position: 'Safety',
      profilePic: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Third_Photos_116_%2850832400503%29_%28cropped%29.jpg', // Same image as Kristen Kelce
      bio: 'Sally Thomas is an aggressive and intelligent defender.',
      location: 'Miami, USA',
      team: 'Blazers',
    },
    {
      name: 'Vic Major',
      position: 'Cornerback',
      profilePic: 'https://upload.wikimedia.org/wikipedia/commons/6/60/JasonKelce.jpg', // Same image as Megan London
      bio: 'Ben Turner is known for his great reflexes and lockdown defense.',
      location: 'Dallas, USA',
      team: 'Blazers',
    },
  ];

  // State to manage the players and the following list
  const [players, setPlayers] = useState(originalPlayers);
  const [following, setFollowing] = useState([]);

  // Handle swipe left (not following)
  const handleSwipeLeft = (player) => {
    console.log(`${player.name} swiped left (Not following)`);

    setPlayers((prev) => {
      const newPlayers = prev.filter((p) => p.name !== player.name);
      // Reset to original players if no players are left
      if (newPlayers.length === 0) {
        return originalPlayers;
      }
      return newPlayers;
    });
  };

  // Handle swipe right (following the player)
  const handleSwipeRight = (player) => {
    console.log(`${player.name} swiped right (Following)`);

    // Add the player to the following list if not already followed
    setFollowing((prevFollowing) => {
      if (!prevFollowing.find((followedPlayer) => followedPlayer.name === player.name)) {
        return [...prevFollowing, player];
      }
      return prevFollowing; // Prevent adding duplicates
    });

    // Remove the player from the current player list
    setPlayers((prev) => {
      const newPlayers = prev.filter((p) => p.name !== player.name);
      // Reset to original players if no players are left
      if (newPlayers.length === 0) {
        return originalPlayers; // Reset to the original players to start the loop again
      }
      return newPlayers;
    });
  };

  return (
    <div className="player-cards-container">
      {players.map((player) => (
        <PlayerCard
          key={player.name}
          player={player}
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
        />
      ))}
      {/* Optionally display the following list */}
      <div className="following-list">
        <h2>Following:</h2>
        <ul>
          {following.map((player) => (
            <li key={player.name}>{player.name} - {player.position}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlayerCards;
