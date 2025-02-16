import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import '../styles/Button.css';

const HomeButton = () => {
  const navigate = useNavigate(); // Initialize navigation function

  return (
    <button className="home-button" onClick={() => navigate('/dashboard')}>
      Home
    </button>
  );
};

export default HomeButton;
