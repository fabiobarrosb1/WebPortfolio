import React, { useContext, useState } from 'react';
import "./Contact.css";
import GithubWhite from "../../assets/githubWhitesmall.png";
import GithibBlack from "../../assets/githubBlacksmall.png";
import LinkedinWhite from "../../assets/linkedinWhitesmall.png";
import LinkedinBlack from "../../assets/linkedinBlacksmall.png";
import DownloadWhite from "../../assets/downloadWhitesmall.png";
import DownloadBlack from "../../assets/downloadBlacksmall.png";
import {saveAs} from "file-saver";
import ContactForm from '../ContactForm/ContactForm';
import MailWhite from "../../assets/email-4small.png";
import MailBlack from "../../assets/email-3small.png";
import SayHi from "../../assets/SayHismall.png";
import MessageSent from "../../assets/MessageSent1small.png";
import { AppContext } from '../AppComponents/AppComponents';



const Contact = () => {
    const handleDownload = () => {
        const fileUrl = '../../data/MyResume.pdf';
        const fileName = 'MyResume.pdf';
    
        if (window.confirm("Do you want to download this file?")) {
            fetch(fileUrl)
              .then(response => response.blob())
              .then(blob => saveAs(blob, fileName));
          }
      }

    const context = useContext(AppContext);
    const theme = context.theme;

    const [message, setMessage] = useState('');

    const handleDataFromChild = (data) => {
        setMessage(data);
    };



  return (
    <div className="contact" id="contact">
        <div className="top-c">
            <div className="top-c-left">
                <h1 className='top-title'>let's make something <br /> amazing together</h1>
            </div>
            <div className="top-c-right">
                <div className="top-c-right-icon1">
                    <a aria-label='Go to my GitHub' rel="noreferrer" target="_blank" href="https://github.com/fabiobarrosb1"><img title='Go to my GitHub' src={theme === "light" ? GithubWhite : GithibBlack} alt="" className="github-img" /></a>
                    
                </div>
                <div className="top-c-right-icon2">
                    <a aria-label='Go to my LinkedIn' rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/fábio-manuel-45b7b1245/"> <img title='Go to my LinkedIn' src={theme === "light" ? LinkedinWhite : LinkedinBlack} alt="" className="linkedin-img" /></a>
                </div>
                <div className="top-c-right-icon3">
                    <a aria-label='Send me an Email' rel="noreferrer" target="_blank" title='Send me an Email' href="mailto:fabiomanuelb1@gmail.com"><img className='mail-icon' src={theme === "light" ? MailWhite : MailBlack} alt="" /></a>
                </div>
            </div>
        </div>
        <div className="resume">
            <div className="resume-button">
                    <button className='button-resume' onClick={handleDownload}>Download My Resume</button>
            </div>
            <div className="download-icon">
                <img onClick={handleDownload} src={theme === "light" ? DownloadWhite : DownloadBlack} alt="" className="download-icon" />
            </div>
        </div>
        <div className="say-hi">
            <div className="say-h1-l">
                <h1 className='say-hi-title'>
                Start by <span className='orange-text gradient-text-contact'>Saying hi!</span>
            </h1>
            </div>
            <div className="say-hi-r">
                <img src={message === false ? SayHi : MessageSent} alt="" className='contact-say-hi-img non-intrusive-image'/>
            </div>
        </div>
        <div className="email-form">
            <ContactForm sendDataToParent={handleDataFromChild} />
        </div>
    </div>
  )
}

export default Contact