import React from 'react';
import RevisedLogo from '../components/RevisedLogo'
import Navigation from '../components/Navigation';
import Profile from '../components/Profile';
import SearchBar from '../components/SearchBar';
import WelcomeMessage from '../components/WelcomeMessage';

const Header = () => {
    console.log("Header component rendered!");
  return (
    
    <header className="header">
      <RevisedLogo />
      <div className="nav-container">
        <Navigation/>
        <SearchBar />
        <Profile />
      </div>
      <WelcomeMessage />
    </header>
  );
};

export default Header;
