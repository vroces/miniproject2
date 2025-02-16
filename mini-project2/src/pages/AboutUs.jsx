import React from "react";
import HomeButton from "../components/HomeButton";
import LogoutButton from "../components/LogoutButton";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <HomeButton />
      <LogoutButton />
      <h1 className="about-us-heading">About ShePlays: Football</h1>
      <p>
        ShePlays: Football was created with one goal in mind—to unite female
        tackle football players from around the world. Women’s football is a
        growing sport, yet finding connections, teams, and opportunities can
        often be a challenge. This platform is designed to change that.
      </p>
      <p>
        I’m Vic Secor, an 11-year veteran football player from Nebraska who has
        spent over a decade on the field. After hanging up my cleats this
        season, I’m embarking on a new journey in software engineering, pursuing
        my certificate from the Institute of Data. As part of my capstone
        project, I wanted to merge my passion for football with my new technical
        skills, creating a space where female athletes can connect, share
        experiences, and grow the sport together.
      </p>
      <p>
        ShePlays: Football is more than just a platform—it’s a community built
        by players, for players. Whether you're a seasoned veteran, a rookie, or
        just passionate about the game, this is a place for you. Let’s work
        together to elevate women’s football and bring more visibility to the
        incredible athletes who play it.
      </p>
      <h2 className="about-us-welcome">
        Welcome to ShePlays: Football—where women’s football takes center stage. </h2>
      
      <p className="image-description">
        Meet me—this is my "WHY": for the LOVE OF THE GAME. These images and
        highlight video capture my journey, passion, and commitment to the
        sport. Join me as we bring more visibility to women's football and unite
        players around the world.
      </p>

      {/* Image Rows */}
      <div className="image-gallery">
        {[...Array(16)].map((_, index) => (
          <img
            key={index}
            src={`/imagerow${index + 1}.png`}
            alt={`Image ${index + 1}`}
            className="about-us-image"
          />
        ))}
      </div>

      {/* Video Section */}
      <div className="video-container">
        <video width="100%" height="auto" controls>
          <source src="/highlights2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default AboutUs;
