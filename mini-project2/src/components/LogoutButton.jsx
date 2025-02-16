import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import '../styles/Button.css';

const LogoutButton = () => {
  const navigate = useNavigate(); // Initialize navigation function

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing local storage, resetting state)
    console.log("User logged out");

    // Redirect to the landing page
    navigate("/");
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
