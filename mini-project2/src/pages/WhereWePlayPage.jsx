import React from "react";
import Header from "../components/Header"; 
import Footer from "../components/Footer"; 

const WhereWePlayPage = () => {
  return (
    <div className="weplaypage-container"> 
      
      <div className="weplayheader-container">
        <Header />
      </div>
      
      <div className="weplay-content">
       <iframe 
          src="https://app.mapline.com/map/map_34d1986d/bTBXb2c2YklFdmxyQWU1bi9HZnBWRHA3VkFBUmtiZEtEVVVjTm" 
          style={{ width: "100%", height: "560px", border: "none" }} 
          allow="geolocation *"
        ></iframe>
        <div style={{ fontSize: "10px", textAlign: "center", marginTop: "10px" }}>
          <a href="https://mapline.com" target="_blank" rel="noopener noreferrer">Mapping by Mapline</a>
        </div>
      </div>
      
      <div className="footer-container">
        <Footer />
      </div>
      
    </div>
  );
};

export default WhereWePlayPage;
