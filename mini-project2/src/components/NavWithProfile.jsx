import React from "react";
import Navigation from "./Navigation";
import Profile from "./Profile";
import '../styles/GamedayPageStyles.css';

const NavWithProfile = () => {
  return (
    <div className="nav-with-profile-container">
      <div className="nav-with-profile-top">
        <Navigation />
        <Profile />
      </div>
    </div>
  );
};

export default NavWithProfile;





