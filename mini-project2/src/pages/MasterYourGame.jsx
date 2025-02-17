import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/MasterYourGame.css"; 


const videoData = [
  {
    title: "Speed & Agility Drills",
    videoUrl: "https://www.youtube.com/embed/9ZTRUVLjGzI",
  },
  {
    title: "Inside the World of Women's Tackle Football",
    videoUrl: "https://www.youtube.com/embed/TIg0GWfiDEE",
  },
  {
    title: "Don't Quit-Tom Brady",
    videoUrl: "https://www.youtube.com/embed/FnS6sFIs5Tg",
  },
  {
    title: "5 Tips to be a Better Receiver",
    videoUrl: "https://www.youtube.com/embed/BkEsX9KAtUo",
  },
];

const articleData = [
  {
    title: "Mental Toughness Test",
    description: "Learn essential football techniques to improve your game.",
    link: "https://mentaltraininginc.com/services/mental-toughness-test",
    image: "/path/to/your/image1.jpg", // Add an image URL here
  },
  {
    title: "Strength and Conditioning",
    description: "Explore mental strategies used by elite athletes.",
    link: "https://www.issaonline.com/blog/post/football-strength-and-conditioning-training-plus-workout",
    image: "/path/to/your/image2.jpg", // Add an image URL here
  },
  {
    title: "Shoulder Tackling",
    description: "Explore techniques to improve your tackling skills.",
    link: "https://usafootball.com/coaches-organizations/shoulder-tackling",
    image: "/path/to/your/image3.jpg", // Add an image URL here
  },
  {
    title: "Mental Toughness Training Manual For Football",
    description: "A manual for building mental strength and resilience.",
    link: "https://static1.squarespace.com/static/585344f1bebafbe99c862a39/t/58812e151e5b6c14199f25a1/1484860950003/Football.pdf",
    image: "/path/to/your/image4.jpg", // Add an image URL here
  },
];

const MasterYourGame = () => {
  return (
    <div className="master-your-game">
      <Header />
      <div className="container">
        <div className="master-content">
          <h1 className="master-heading1">MASTER YOUR GAME</h1>
          <p>Enhance your training with expert drills, mental strategies, and technique guides.</p>

          {/* Video Section */}
          <h2 className="master-heading2">Training Videos</h2>
          <div className="video-row">
            {videoData.map((video, index) => (
              <div className="video-card" key={index}>
                <iframe
                  height="200"
                  src={video.videoUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                <div className="video-card-content">
                  <h3>{video.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Article Section */}
          <h2 className="master-heading2">Recommended Articles</h2>
          <div className="article-row">
            {articleData.map((article, index) => (
              <div className="article-card" key={index}>
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                  
                  <div className="article-card-content">
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                  </div>
                </a>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MasterYourGame;