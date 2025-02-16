import React from "react";
import NavWithProfile from "../components/NavWithProfile";
import "../styles/MasterYourGame.css"; // Your styles
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";


const MasterYourGame = () => {
    return (
        <div className="master-your-game">
          <Header /> {/* Top Header */}
          
          <div className="master-content">
            {/* Your content goes here */}
            <h1>Welcome to Master Your Game</h1>
            <p>This is where the  content will be displayed.</p>
          </div>
          <Footer /> {/* Footer at the bottom */}
        </div>
      );
    };
export default MasterYourGame;
