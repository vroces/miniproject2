import React from "react";
import "../styles/GamedayPageStyles.css"; // Your styles
import NavWithProfile from "../components/NavWithProfile";

const Dashboard = () => {
  return (
    <div>
      <NavWithProfile /> {/* Use the NavWithProfile component here */}
      {/* Your other components for the Dashboard page */}
    </div>
  );
};

export default Dashboard;

