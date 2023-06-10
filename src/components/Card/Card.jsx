import React, { useContext, useState } from 'react';
import "./Card.css";
import { AppContext } from '../AppComponents/AppComponents';
import { BsGithub } from 'react-icons/bs';

const Card = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const context = useContext(AppContext);
  const theme = context.theme;



  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
    id={`${props.id}${isHovered ? "hovered" : ""}`}
      className={`card ${props.id} ${theme === "dark" ? "dark-mode" : "light-mode"}`}
    >
      <div className={`project-card ${props.id} ${theme === "dark" ? "dark-mode" : ""}`}>
        <div className={`project-top ${props.id} ${theme === "dark" ? "dark-mode" : ""}`}>
          <div className={`project-card-left ${props.id} ${theme === "dark" ? "dark-mode" : ""}`}>
            <h4 className="project-card-heading">{props.tools}</h4>
          </div>
          <div className={`project-card-middle ${props.id} ${theme === "dark" ? "dark-mode" : ""}`}>
            <img className='project-card-img' loading='lazy' src={props.imageUrl} alt="" />
          </div>
        </div>
        <div className={`project-bottom ${props.id} ${theme === "dark" ? "dark-mode" : ""}`}>
          <div className={`project-card-right ${props.id} ${theme === "dark" ? "dark-mode" : ""}`}>
            <h2 className="project-card-title">{props.title}</h2>
            <div className={`project-card-links ${props.id} ${theme === "dark" ? "dark-mode" : ""}`}>
              <a aria-label='Go to website' rel="noreferrer" target="_blank" className={` animated-link visit-website  ${isHovered ? 'hovered' : ''} ${theme === "dark" ? "dark-mode" : "light-mode"}`} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} href={props.url}><span className={`visit-website ${theme === "dark" ? "dark-mode" : "light-mode"}`}>VISIT THE WEBSITE</span></a>
            <a aria-label='Go to my GitHub page' rel="noreferrer" target='_blank' href="https://github.com/fabiobarrosb1" className={`project-card-links-github ${theme === "dark" ? "dark-mode" : "light-mode"}`}><BsGithub /></a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
