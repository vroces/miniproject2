import React from "react";
import HomeButton from "../components/HomeButton";
import LogoutButton from "../components/LogoutButton";
import Footer from "../components/Footer";
import Profile from "../components/Profile";

import "../styles/ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="profile-page-container">
      <div className="profile-page-content">
       
        <div className="profile-page-top-section">
          <Profile className="profile-page-pic" /> 
          <div className="profile-page-buttons">
            <HomeButton />
            <LogoutButton />
          </div>
        </div>
       

        <h1>Profile Page</h1>
        <p>Welcome to your profile!</p>
      
      </div>

     <Footer/>
      
    </div>
  );
};

export default ProfilePage;
