// WhereWePlayPage.jsx
import React from "react";

import Header from "../components/Header"; // Import your Header component
import Footer from "../components/Footer"; // Import your Footer component

const WhereWePlayPage = () => {
  return (
    <div className="weplaypage-container"> {/* Optional: Add a container for the entire page */}
      
      <div className="weplayheader-container">
        <Header /> {/* Add the Header component inside its own container */}
      </div>
      
      
      
      <div className="footer-container">
        <Footer /> {/* Add the Footer component inside its own container */}
      </div>
      
    </div>
  );
};

export default WhereWePlayPage;
