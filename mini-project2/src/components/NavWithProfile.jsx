// src/components/NavWithProfile.jsx

import React from "react";
import Navigation from "./Navigation"; // Assuming you have a Navigation component
import Profile from "./Profile"; // Assuming you have a Profile component

const NavWithProfile = () => {
  return (
    <div className="nav-container">
      <div className="nav-top">
        <Navigation />
        <Profile />
      </div>
    </div>
  );
};

export default NavWithProfile;
