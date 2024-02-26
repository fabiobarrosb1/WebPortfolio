import React, { useContext, useEffect, useRef } from "react";
import "./Carousel.css";
import image1 from "../../assets/skills/css-3.png";
import image2 from "../../assets/skills/CSSTailwind.svg.png";
import image3 from "../../assets/skills/Figma-logo.svg";
import image4 from "../../assets/skills/Python.svg.png";
import image5 from "../../assets/skills/SQL.png";
import image6 from "../../assets/skills/html-5.png";
import image7 from "../../assets/skills/js.png";
import image8 from "../../assets/skills/react-png.png";
import image9 from "../../assets/skills/Visual_Studio_Code_1.35_icon.svg.png";
import image10 from "../../assets/skills/redux.png";
import image11 from "../../assets/skills/c.svg.png";
import image12 from "../../assets/skills/Git-Icon-1788C.png";
import { AppContext } from "../AppComponents/AppComponents";

const InfiniteCarousel = () => {
  const theme = useContext(AppContext);

  return (
    <div id="skills" className="carousel-container">
      <div
        className={`project-card-left skills-text-left ${
          theme === "dark" ? "dark-mode" : ""
        }`}
      >
        <h4 className="project-card-heading">SKILLS</h4>
      </div>
      <div className="marquee">
        <div className="marquee--inner">
          <span className="carousel-span">
            <div className="orb">
              <img
                title="CSS"
                className="image-carousel"
                src={image1}
                alt="CSS"
              />
            </div>
            <div className="orb">
              <img
                title="CSSTailwind"
                className="image-carousel"
                src={image2}
                alt="CSSTailwind"
              />
            </div>
            <div className="orb">
              <img
                title="Figma"
                className="image-carousel"
                src={image3}
                alt="Figma"
              />
            </div>
            <div className="orb">
              <img
                title="Python"
                className="image-carousel"
                src={image4}
                alt="Python"
              />
            </div>
            <div className="orb">
              <img
                title="MySQL"
                className="image-carousel"
                src={image5}
                alt="MySQL"
              />
            </div>
            <div className="orb">
              <img
                title="HTML"
                className="image-carousel"
                src={image6}
                alt="HTML"
              />
            </div>
            <div className="orb">
              <img
                title="JavaScript"
                className="image-carousel"
                src={image7}
                alt="JavaScript"
              />
            </div>
            <div className="orb">
              <img
                title="React"
                className="image-carousel"
                src={image8}
                alt="React"
              />
            </div>
            <div className="orb">
              <img
                title="VSCode"
                className="image-carousel"
                src={image9}
                alt="VSCode"
              />
            </div>
            <div className="orb">
              <img
                title="Redux"
                className="image-carousel"
                src={image10}
                alt="Redux"
              />
            </div>
            <div className="orb">
              <img title="C" className="image-carousel" src={image11} alt="C" />
            </div>
            <div className="orb">
              <img
                title="Git"
                className="image-carousel"
                src={image12}
                alt="Git"
              />
            </div>
          </span>
          <span className="carousel-span">
            <div className="orb">
              <img
                title="CSS"
                className="image-carousel"
                src={image1}
                alt="CSS"
              />
            </div>
            <div className="orb">
              <img
                title="CSSTailwind"
                className="image-carousel"
                src={image2}
                alt="CSSTailwind"
              />
            </div>
            <div className="orb">
              <img
                title="Figma"
                className="image-carousel"
                src={image3}
                alt="Figma"
              />
            </div>
            <div className="orb">
              <img
                title="Python"
                className="image-carousel"
                src={image4}
                alt="Python"
              />
            </div>
            <div className="orb">
              <img
                title="MySQL"
                className="image-carousel"
                src={image5}
                alt="MySQL"
              />
            </div>
            <div className="orb">
              <img
                title="HTML"
                className="image-carousel"
                src={image6}
                alt="HTML"
              />
            </div>
            <div className="orb">
              <img
                title="JavaScript"
                className="image-carousel"
                src={image7}
                alt="JavaScript"
              />
            </div>
            <div className="orb">
              <img
                title="React"
                className="image-carousel"
                src={image8}
                alt="React"
              />
            </div>
            <div className="orb">
              <img
                title="VSCode"
                className="image-carousel"
                src={image9}
                alt="VSCode"
              />
            </div>
            <div className="orb">
              <img
                title="Redux"
                className="image-carousel"
                src={image10}
                alt="Redux"
              />
            </div>
            <div className="orb">
              <img title="C" className="image-carousel" src={image11} alt="C" />
            </div>
            <div className="orb">
              <img
                title="Git"
                className="image-carousel"
                src={image12}
                alt="Git"
              />
            </div>
          </span>
        </div>
      </div>
      <div
        className={`project-card-left skills-text-right ${
          theme === "dark" ? "dark-mode" : ""
        }`}
      >
        <h4 className="project-card-heading">SKILLS</h4>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
