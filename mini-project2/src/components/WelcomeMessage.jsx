import React from "react";
import { useAuth } from "../context/AuthContext"; // Import auth context

const WelcomeMessage = () => {
  const { user } = useAuth(); // Get user info

  // If no user is logged in, do not render anything
  if (!user) return null;

  return (
    <div className="welcome-container">
      <h2>Welcome, {user.name}!</h2>
    </div>
  );
};

export default WelcomeMessage;
