import React, { useContext, useState } from 'react';
import "./Footer.css";
import { Link } from "react-scroll";
import { AppContext } from '../AppComponents/AppComponents';
import MailBlack from "../../assets/email-3small.png";
import MailWhite from "../../assets/email-4small.png";
import GithubWhite from "../../assets/githubWhitesmall.png";
import GithubBlack from "../../assets/githubBlacksmall.png";
import LinkedinWhite from "../../assets/linkedinWhitesmall.png";
import LinkedinBlack from "../../assets/linkedinBlacksmall.png";

const Footer = () => {
  const context = useContext(AppContext);
  const theme = context.theme;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div className={`footer ${theme === 'dark' ? 'dark-mode' : ''}`}>
        <div className="footer-left">
            <ul className={`footer-menu ${theme === "dark" ? "dark-mode" : ""}`}>
                <li><Link to='header' spy={true} smooth={true}>Home</Link></li>
                {/* <li><Link to="services" spy={true} smooth={true}>Services</Link></li>
                <li><Link to="skills" spy={true} smooth={true}>Skills</Link></li> */}
                <li><Link to="projects" spy={true} smooth={true}>Projects</Link></li>
            </ul>
        </div>
        <div className={`animations-text ${theme === "dark" ? "dark-mode" : ""}`}>
            <span className="animations-text-span">
                3D Illustrations made by <span className={`keelan-site-span`}><a aria-label='Go to keelanjon.com' rel="noreferrer" target="_blank" className={`keelan-site animated-link-footer ${isHovered ? 'hovered' : ''} ${theme === "dark" ? "dark-mode" : "light-mode"}`} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} href="https://keelanjon.com">https://keelanjon.com</a> </span> 
            </span>
        </div>
        <div className={`social-img-footer ${theme === "dark" ? "dark-mode" : ""}`}>
            <ul>
                <li>
                    <a aria-label='Send me an email' rel="noreferrer" target="_blank" title='Send me an Email' href="mailto:fabiomanuelb1@gmail.com"><img  className='footer-img mail-footer' src={theme === "light" ? MailWhite : MailBlack} alt="" /></a>
                </li>
                <li className='scale-two'>
                    <a aria-label='Go to my GitHub' rel="noreferrer" target="_blank" href="https://github.com/fabiobarrosb1"><img title='Go to my GitHub' src={theme === "light" ? GithubWhite : GithubBlack} alt="" className="footer-img" /></a>
                </li>
                <li className='scale-two'>
                    <a aria-label='Go to my LinkedIn' rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/fábio-manuel-45b7b1245/"> <img title='Go to my LinkedIn' src={theme === "light" ? LinkedinWhite : LinkedinBlack} alt="" className="footer-img" /></a>
                </li></ul>
        </div>
    </div>
  )
}

export default Footer;