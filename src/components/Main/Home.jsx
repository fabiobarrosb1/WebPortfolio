import React, {useContext, useEffect, useState} from 'react';
import "./Home.css";
import Header from '../Header/Header';
// import Logo from "../../assets/logo4.png";
import ComputerWhite from "../../assets/webp/macbooksmall.webp";
import ComputerBlack from "../../assets/webp/macbook-2smalll.webp";
import ReactWhite from "../../assets/webp/reactWhite1small.webp";
import ReactBlack from "../../assets/webp/reactBlacksmall.webp";
import coffeenoback2small from "../../assets/webp/coffeenoback2-2.webp";
import Yelllow from "../../assets/yellow.png";
import { AppContext } from '../AppComponents/AppComponents';
// import Navbar from '../Header/Navbar';


const Home = () => {
    const context = useContext(AppContext);
    const theme = context.theme;
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isSmallScreen2, setIsSmallScreen2] = useState(false);

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

      useEffect(() => {
        const handleResize = () => {
          setIsSmallScreen2(window.innerWidth < 470);
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
    <div className="home-container">
        <Header />
        {/* <Navbar /> */}
        <div className="home">
            <div className="home-left">
                <div className="home-h1 left-box">
                    <h1>Hi There,<br /> I'm Fábio</h1>
                </div>
                <div className="home-text left-box">
                    <div className="home-text-1">
                        <img src={theme === "light" ? ComputerWhite : ComputerBlack} alt="" className="home-computer-icon" />
                        <h6><span className='green-text'>self taught <br /></span> software <br /> developer</h6>
                    </div>
                    <div className="home-text-2">
                        <img src={theme === "light" ? ReactWhite : ReactBlack} alt="" className="home-react-icon" />
                        <h6><span className='green-text'>main language <br /></span> react <br /> developer</h6>
                    </div>
                </div>
            </div>
            {isSmallScreen && <div className="wrapper-home-right">
            <div className="home-right">
                <img preload="true" className='home-logo' src={theme === "light" ? coffeenoback2small : coffeenoback2small} alt="" />
            </div>
            <div className="home-super-right">
                
                    {/* <img src={Yelllow} alt=""  id='yellow-img'/> */}
              
                <h1 className={`coffee-h1 ${theme === "dark" ? "dark-mode" : "light-mode"}`}>I already have <br /> my <span className="coffee-text gradient-text-coffee">coffee.</span><br />Let's get to <span className={`orange-text gradient-text-cool ${theme === "dark" ? "dark-mode" : "light-mode"}`}>work!</span><span >🧑🏼‍💻</span></h1>
            </div>
            </div>}
            {!isSmallScreen && <React.Fragment>
                <div className="home-right">
                        <img preload="true" className='home-logo' src={theme === "light" ? coffeenoback2small : coffeenoback2small} alt="" />
                    </div>
                    <div className="home-super-right">
                        
                            {/* <img src={Yelllow} alt=""  id='yellow-img'/> */}
                    
                        <h1>I already have <br /> my <span className="coffee-text gradient-text-coffee">coffee.</span><br />Let's get to <span className="orange-text gradient-text-cool">work!</span>🧑🏼‍💻</h1>
                    </div>
                </React.Fragment>}
        </div>
    </div>
  )
}

export default Home