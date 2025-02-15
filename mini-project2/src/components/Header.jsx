import React from 'react';

import Navigation from '../components/Navigation';
import Profile from '../components/Profile';
import SearchBar from '../components/SearchBar';
import WelcomeMessage from '../components/WelcomeMessage';

const Header = () => {
  console.log("Header component rendered!");
return (
  <header className="dashboard-header">
    
      <div className="nav-container">
        {/* Group Navigation and Profile Pic in a row */}
        <div className="nav-top">
          <Navigation />
          <Profile />
        </div>

        {/* Search Bar placed below */}
        <SearchBar />
      </div>
    
    <WelcomeMessage />
  </header>
);
};


export default Header;
