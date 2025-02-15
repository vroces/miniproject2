import React from "react";
import { useAuth } from "../context/AuthContext"; // Import Auth Context
import Header from "../components/Header";
import Hero from "../components/Hero";
import SubHeader from "../components/SubHeader";
import "../styles/DashboardPageStyles.css";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Features from "../components/Features";

const Dashboard = () => {
  const { user, logout } = useAuth(); // Get user info & logout function

  if (!user) {
    return <p>Loading...</p>; // Show loading if user is not yet available
  }

  return (
    <>
      <Header />
      <SubHeader />
      <Hero />

      

      <Features />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Dashboard;

