import React, { useState, useRef } from 'react';

const PlayerCard = ({ player, onSwipeLeft, onSwipeRight }) => {
  const [xPosition, setXPosition] = useState(0);
  const startX = useRef(null);
  const cardRef = useRef(null);

  // Handle mouse down (start of the swipe)
  const handleMouseDown = (e) => {
    startX.current = e.clientX; // Start position of the mouse
    console.log("Mouse Down:", startX.current);
  };

  // Handle mouse move (during the swipe)
  const handleMouseMove = (e) => {
    if (!startX.current) return;

    const deltaX = e.clientX - startX.current; // Movement in X direction
    setXPosition(deltaX);
    console.log("Mouse Move:", deltaX);
  };

  // Handle mouse up (end of the swipe)
  const handleMouseUp = () => {
    console.log("Mouse Up, xPosition:", xPosition);

    if (xPosition < -100) {
      console.log(`${player.name} swiped left`);
      onSwipeLeft(player); // Call the left swipe handler
    } else if (xPosition > 100) {
      console.log(`${player.name} swiped right`);
      onSwipeRight(player); // Call the right swipe handler
    }

    setXPosition(0); // Reset position after swipe
    startX.current = null; // Reset start position
  };

  return (
    <div
      ref={cardRef}
      className="player-card"
      onMouseDown={handleMouseDown} // Mouse down event
      onMouseMove={handleMouseMove} // Mouse move event
      onMouseUp={handleMouseUp} // Mouse up event
      style={{
        transform: `translateX(${xPosition}px)`,
        transition: xPosition === 0 ? 'transform 0.3s ease-in-out' : 'none',
      }}
    >
      <img src={player.profilePic} alt={player.name} />
      <h3>{player.name}</h3>
      <p>{player.position}</p>
      <p><strong>Location:</strong> {player.location}</p>
      <p>{player.bio}</p>
    </div>
  );
};

export default PlayerCard;
