import React, { useState, useRef, useContext, useEffect } from 'react';
import emailjs from "@emailjs/browser";
import "./ContactForm.css";
import CheckMark from "../../assets/webp/CheckMarksmall.webp";
import { AppContext } from '../AppComponents/AppComponents';
import FadeLoader from "react-spinners/ClipLoader";

const ContactForm = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);
    const context = useContext(AppContext);
    const theme = context.theme;
    const sendData = props.sendDataToParent;
    const [loading, setLoading]  = useState(false);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    //     // Here you can add your code to send the form data to the server or external service
    //   };

    useEffect(() => {
      sendData(sent);
    }, [sent]);


    const form = useRef();

    const sendEmail = (e) => {   
        setLoading(true); 
        e.preventDefault();

        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

        emailjs.sendForm('service_x4pbj9d', 'template_dykctio', form.current, 'yDJIIOUEJboRjzYtX')
          .then((result) => {
            console.log(result);
            if (result.status === 200) {
                // setLoading(false);
                setEmail("");
                setMessage("");
                setName("");
                setSent(true);
                console.log(sent);
                alert("Message sent");
            }
              console.log(result.text);
          }, (error) => {
            // setLoading(false);
            console.log(error);
              console.log(error.text);
              if(error) {
                alert("Something went wrong");
              }
          })
          .finally(() => {
            setLoading(false);
          });
    };


    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsSmallScreen(window.innerWidth < 478);
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
    <form onSubmit={sendEmail} ref={form}>
      {!isSmallScreen && <div className='form-div'>
            <div className="form-right">
                <div className='name-input'>
                    <input autoComplete='name' type="text" name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} required placeholder='Your Name'/>
                </div>
                <div className='email-input'>
                    <input autoComplete='email' type="email" name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Your Email'/>
                </div>
                <div className="send-button-div">
                    <button disabled={loading} className='send-button' type='submit'>Send Message</button>
                    
                    {/* <img className='sendArrow-img' src={theme === "light" ? SendWhite1 : SendBlack1} alt="" /> */}
                    {loading && <FadeLoader className='fade-loader' color="#28656C" height={17} />}
                    {sent && <img className='check-mark-icon' src={theme === "light" ? CheckMark : CheckMark} alt="" />}

                </div>
                
                
            </div>
            <div className="form-left">
                <div className='message-input'>
                    <textarea value={message} name='message' id="message" cols="30" rows="10" onChange={(e) => setMessage(e.target.value)} required placeholder='Your Message'></textarea>
                </div>
            </div>
        </div>}
        {isSmallScreen &&
            <div className="form-right">
              <div className="form-up-small">
                <div className='name-input'>
                    <input autoComplete='name' type="text" name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} required placeholder='Your Name'/>
                </div>
                <div className='email-input'>
                    <input autoComplete='email' type="email" name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Your Email'/>
                </div>
              </div>
                
                <div className='message-input'>
                    <textarea value={message} name='message' id="message" cols="30" rows="10" onChange={(e) => setMessage(e.target.value)} required placeholder='Your Message'></textarea>
                </div>
                <div className="send-button-div">
                    <button disabled={loading} className='send-button' type='submit'>Send Message</button>
                    
                    {/* <img className='sendArrow-img' src={theme === "light" ? SendWhite1 : SendBlack1} alt="" /> */}
                    {loading && <FadeLoader className='fade-loader' color="#28656C" height={17} />}
                    {sent && <img className='check-mark-icon' src={theme === "light" ? CheckMark : CheckMark} alt="" />}
                </div>
            </div>}
        
        
      

    </form>
    
  )
}

export default ContactForm;