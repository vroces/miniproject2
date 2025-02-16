import React, { useState, useRef } from 'react';

const PlayerCard = ({ player, onSwipeLeft, onSwipeRight }) => {
  const [xPosition, setXPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isSwiping, setIsSwiping] = useState(false); // Track swipe to animate out
  const startX = useRef(null);

  // Handle mouse down (start of the swipe)
  const handleMouseDown = (e) => {
    startX.current = e.clientX;
    setIsDragging(true);
    document.body.style.userSelect = 'none'; // Prevent text selection while dragging
  };

  // Handle mouse move (dragging)
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX.current;
    setXPosition(deltaX);
  };

  // Handle mouse up (end of swipe)
  const handleMouseUp = () => {
    if (xPosition < -100) {
      // Swiping Left
      setIsSwiping(true);
      setTimeout(() => onSwipeLeft(player), 300); // Delay removal for smooth animation
    } else if (xPosition > 100) {
      // Swiping Right
      setIsSwiping(true);
      setTimeout(() => onSwipeRight(player), 300);
    }

    setIsDragging(false);
    setTimeout(() => {
      setXPosition(0);
      setIsSwiping(false);
    }, 300);

    document.body.style.userSelect = ''; // Restore text selection
  };

  return (
    <div
      className="player-card"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        transform: `
          translateX(${xPosition}px) 
          rotate(${xPosition / 15}deg)`, // Adds a slight rotation effect
        opacity: isSwiping ? 0 : 1, // Fade out on swipe
        transition: isDragging ? 'none' : 'transform 0.3s ease-out, opacity 0.3s ease-out',
      }}
    >
      <img src={player.profilePic} alt={player.name} />
      <h3>{player.name}</h3>
      <p><strong>Position:</strong>{player.position}</p>
      <p><strong>Location:</strong> {player.location}</p>
      <p><strong>Team:</strong> {player.team}</p>
      <p>{player.bio}</p>
    </div>
  );
};

export default PlayerCard;
