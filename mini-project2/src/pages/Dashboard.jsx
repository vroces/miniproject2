import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SubHeader from "../components/SubHeader";
import "../styles/DashboardPageStyles.css";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Features from "../components/Features";



const Dashboard = () => {
  return (
    <>
    <Header/>
 <SubHeader/>
    <Hero/> 

        
          <Features/>
          <Testimonials/>
          <Footer/>
         
          
    </>
  );
};

export default Dashboard;
