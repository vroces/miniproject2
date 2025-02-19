import React, { useState } from "react";
import HomeButton from "../components/HomeButton";
import LogoutButton from "../components/LogoutButton";
import Footer from "../components/Footer";

import "../styles/ProfilePage.css";

const ProfilePage = () => {
  const [profilePic, setProfilePic] = useState(null); // Track profile pic URL
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [team, setTeam] = useState("");
  const [bio, setBio] = useState("");

  // Handle profile pic change
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result); // Set image preview
      };
      reader.readAsDataURL(file); // Read the file and convert to base64
    }
  };

  // Handle form submission (save profile info)
  const handleSave = () => {
    console.log("Saving user profile data...");
    console.log({ profilePic, position, location, team, bio });
    // Implement saving logic (e.g., backend API)
  };

  return (
    <div className="profile-page-container">
      <div className="profile-page-content">
        <div className="profile-page-top-section">
          <input 
            type="file" 
            onChange={handleProfilePicChange} 
            accept="image/*" 
            id="profile-pic-input"
          />
          {profilePic && (
            <img src={profilePic} alt="Profile" className="profile-page-pic" />
          )}
          <div className="profile-page-buttons">
            <HomeButton />
            <LogoutButton />
          </div>
        </div>

        <div className="profile-form">
          <input 
            type="text" 
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Team"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
          />
          <textarea 
            placeholder="Short Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>

        <button onClick={handleSave}>Save Profile</button>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;
