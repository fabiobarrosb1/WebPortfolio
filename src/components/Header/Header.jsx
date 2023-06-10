import React, { useState, useEffect, useContext } from 'react';
import "./Header.css";
import MailBlack from "../../assets/webp/email-3small.webp";
import MailWhite from "../../assets/webp/email-4small.webp";
import { Link } from "react-scroll";
import GithubWhite from "../../assets/webp/githubWhitesmall.webp";
import GithubBlack from "../../assets/webp/githubBlacksmall.webp";
import LinkedinWhite from "../../assets/webp/linkedinWhitesmall.webp";
import LinkedinBlack from "../../assets/webp/linkedinBlacksmall.webp";
import FLogo from "../../assets/webp/F-logosmall.webp";
import { AppContext } from '../AppComponents/AppComponents';
import HamburgerMenu from './HamburgerMenu';

import { BsSunFill, BsMoonFill } from 'react-icons/bs';


const Header = () => {
    const context = useContext(AppContext);
    const theme = context.theme;
    const [isHamburgerActive, setIsHamburgerActive] = useState(false);

    function switchHamburger() {
        setIsHamburgerActive((prevIsHarmburgerActive) => !prevIsHarmburgerActive);
    }


    useEffect(() => {
        if(context.theme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [context.theme]);

    function handleThemeClick() {
        context.toggleTheme();
    }

    

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsSmallScreen(window.innerWidth < 714);
        };
    
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Initial check for screen size
        handleResize();
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);


  return (
    <div>
        {!isSmallScreen &&
    <div className={`header`} id='header'>
        <div className="left-h logo-div">
            <ul className="header-menu header-menu-title header-menu-l">
                <li className='logo-text'><Link to='header' spy={true} smooth={true}>
                <img src={FLogo} alt="" className="logo-f-header" /></Link></li>
            </ul>
        </div>


        <div className={`middle-h ${isHamburgerActive === "true" ? "show-header" : "hide-header"}`}>
            <ul className='header-menu header-menu-items header-menu-m'>
                <li className='header-menu-items-items'><Link to='projects' spy={true} smooth={true}>Projects</Link></li>
                <li className='header-menu-items-items'><Link to='contact' spy={true} smooth={true}>Resume</Link></li>
                <li className='header-menu-items-items'><Link to='contact' spy={true} smooth={true}>Contact</Link></li>
                <li 
                className={`scale-two toggle-theme-icon ${theme === "dark" ? "dark-mode" : "light-mode"}`}
                title={`Change to ${theme === "dark" ? "Light Mode" : "Dark Mode"}`}
                role="button"
                onClick={handleThemeClick}
                aria-pressed={context.theme === "dark" ? "true" : "false"}><span className={`breathing-element ${theme === "dark" ? "dark-mode" : ""}`}>{context.theme === "dark" ? <BsSunFill className='switch-dark-mode-logo'/> : <BsMoonFill className='switch-dark-mode-logo'/>}</span>
                    
                </li>
            </ul>
        </div>


        <div className="right-h">
            <ul className='header-menu header-menu-items header-menu-r'>
                <li>
                    <a aria-label='Send me an Email' rel="noreferrer" target="_blank" title='Send me an Email' href="mailto:fabiomanuelb1@gmail.com"><img  className='mail-icon' src={theme === "light" ? MailWhite : MailBlack} alt="" /></a>
                </li>
                <li className='scale-two'>
                    <a aria-label='Go to my GitHub' rel="noreferrer" target="_blank" href="https://github.com/fabiobarrosb1"><img title='Go to my GitHub' src={theme === "light" ? GithubWhite : GithubBlack} alt="" className="header-github-img" /></a>
                </li>
                <li className='scale-two'>
                    <a aria-label='Go to my LinkedIn' rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/fábio-manuel-45b7b1245/"> <img title='Go to my LinkedIn' src={theme === "light" ? LinkedinWhite : LinkedinBlack} alt="" className="header-linkedin-img" /></a>
                </li>

                
            
            </ul>
        </div>
        </div>}
    {isSmallScreen &&
    <div className={`header`} id='header'>
        <div className='small-screen-top-navbar'>
        <div className="left-h logo-div">
            <ul className="header-menu header-menu-title header-menu-l">
                <li className='logo-text'><Link to='header' spy={true} smooth={true}>
                <img src={FLogo} alt="" className="logo-f-header" /></Link></li>
            </ul>
        </div>
        <div className="small-header-right">

        <div className="small-header-setmode">
        <ul>
            <li 
                className={`scale-two toggle-theme-icon ${theme === "dark" ? "dark-mode" : "light-mode"}`}
                title={`Change to ${theme === "dark" ? "Light Mode" : "Dark Mode"}`}
                role="button"
                onClick={handleThemeClick}
                aria-pressed={context.theme === "dark" ? "true" : "false"}><span className={`breathing-element ${theme === "dark" ? "dark-mode" : ""}`}>{context.theme === "dark" ? <BsSunFill className='switch-dark-mode-logo'/> : <BsMoonFill className='switch-dark-mode-logo'/>}</span>
                    
                </li>
            </ul>
        </div>
        <div className={`hamburger ${isHamburgerActive ? 'active' : ''}`} onClick={switchHamburger}>
            
            <HamburgerMenu />
        </div>
        </div>

        </div>

        <div className={`hide-header-div ${isHamburgerActive ? 'active' : ''}`}>
        <div className={`middle-h`}>
            <ul className='header-menu header-menu-items header-menu-m'>
                {/* <li><Link to='services' spy={true} smooth={true}>Services</Link></li>
                <li><Link to='skills' spy={true} smooth={true}>Skills</Link></li> */}
                <li><Link to='projects' spy={true} smooth={true}>Projects</Link></li>
                <li><Link to='contact' spy={true} smooth={true}>Resume</Link></li>
                <li><Link to='contact' spy={true} smooth={true}>Contact</Link></li>
            </ul>
        </div>

        
        <div className="right-h">
            <ul className='header-menu header-menu-items header-menu-r'>
                <li>
                    <a rel="noreferrer" target="_blank" title='Send me an Email' href="mailto:fabiomanuelb1@gmail.com"><img  className='mail-icon' src={theme === "light" ? MailWhite : MailBlack} alt="" /></a>
                </li>
                <li className='scale-two'>
                    <a rel="noreferrer" target="_blank" href="https://github.com/fabiobarrosb1"><img title='Go to my GitHub' src={theme === "light" ? GithubWhite : GithubBlack} alt="" className="header-github-img" /></a>
                </li>
                <li className='scale-two'>
                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/fábio-manuel-45b7b1245/"> <img title='Go to my LinkedIn' src={theme === "light" ? LinkedinWhite : LinkedinBlack} alt="" className="header-linkedin-img" /></a>
                </li>

                
            
            </ul>
        </div>
        </div>
        
        </div>}
    </div>
    
  )
}

export default Header;



// onClick={switchHamburger()}