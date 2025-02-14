import React from 'react';
import { NavLink } from 'react-router-dom';
import profilePic from '../assets/propic1.png';
import notifications from '../assets/notifications.png';

const Profile = () => {
  return (
    <div className="profile-pic-container">
      <div className="profile-pic-with-notification">
        <NavLink to="/profile">
          <img src={profilePic} alt="Profile Picture" className="profile-pic" />
        </NavLink>
        <div className="notification-container">
          <NavLink to="/notifications">
            <img src={notifications} alt="Notifications" className="notification-icon" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Profile;
