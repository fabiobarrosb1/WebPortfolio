import React, { useContext } from "react";
import "./Projects.css";
import Card from "../Card/Card";
import SuperM from "../../assets/webp/SuperMsmall.webp";
import FoodTracker from "../../assets/webp/FoodTrackersmall.webp";
import FitClub from "../../assets/webp/FitClubsmall.webp";
import SpotifyProject from "../../assets/SpotifyProject.webp";
import Fruity from "../../assets/Fruity.webp";
import { AppContext } from "../AppComponents/AppComponents";
import InfiniteCarousel from "../Carousel/Carousel";

const Projects = () => {
  const context = useContext(AppContext);
  const theme = context.theme;
  const cards = [
    {
      id: "card1",
      title: "Flowy: Track Your Spotify, Manage Tasks, Time, and Notes",
      imageUrl: SpotifyProject,
      description: "Designed and built entirely by me.",
      url: "https://flowy-app.vercel.app",
      number: "01",
      tools: "REACT JS, REDUX, SPOTIFY API, WEB PLAYBACK SDK",
    },
    {
      id: "card2",
      title: "Fruity - 3D Slider",
      imageUrl: Fruity,
      description: "Simple but effective and pretty animation.",
      url: "https://fruity-3d-slider.vercel.app",
      number: "02",
      tools: "REACT JS, CSS ANIMATIONS",
    },
    {
      id: "card3",
      title: "Gym WebApp",
      imageUrl: FitClub,
      description: "This one I made with a YouTube video.",
      url: "https://gymwebapp-reactjs.netlify.app/",
      number: "03",
      tools: "REACT JS, CSS, FRAMER MOTION",
    },
    {
      id: "card4",
      title: "Food Calorie Tracker",
      imageUrl: FoodTracker,
      description: "This project was made on a JavaScript Course that I took.",
      url: "https://calorietracker-react.netlify.app/",
      number: "04",
      tools: "JAVASCRIPT, HTML, CSS, API",
    },
    {
      id: "card5",
      title: "WebStore",
      imageUrl: SuperM,
      description:
        "This was made on a React Course. It has both, frontend and backend",
      url: "https://superm-onlinestore.netlify.app/",
      number: "05",
      tools: "REACT JS, API, REDUX, STRIPE",
    },
  ];

  return (
    <div
      className={`projects ${theme === "dark" ? "dark-mode" : ""}`}
      id="projects"
    >
      <div className={`top-p ${theme === "dark" ? "dark-mode" : ""}`}>
        <div
          className={`top-p-title-image ${theme === "dark" ? "dark-mode" : ""}`}
        >
          <h1 className={`top-p-h1 ${theme === "dark" ? "dark-mode" : ""}`}>
            My Latest Projects
          </h1>
        </div>
      </div>
      <div className={`bottom-p ${theme === "dark" ? "dark-mode" : ""}`}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <InfiniteCarousel />
    </div>
  );
};

export default Projects;
