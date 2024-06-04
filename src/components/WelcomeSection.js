import React, { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
import './css/WelcomeSection.css';
import LogoB from '../assets/logo/LogoB.png';
import Footer from './Footer.js';
import MyNavbar from './MyNavbar.js';
import NavbarHome from './NavbarHome.js';
import ContactUs from './ContactUs.js';


const WelcomeSection = () => {
  const [animate, setAnimate] = useState(false);
  // const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  // const handleShow = () => setShowModal(true);
  // const handleClose = () => setShowModal(false);

  return (
    <div>
       {/* <MyNavbar /> */}
       <NavbarHome/>
    <div className={`welcome-container d-flex flex-column align-items-center justify-content-center ${animate ? 'animate' : ''}`}>
      <div className="welcome-image-container position-relative">
        <img src={LogoB} alt="Letter B" className="welcome-image img-fluid" />
        <div className="welcome-text position-absolute top-50 start-50 translate-middle text-center">
          <span className="black">W</span>
          <span className="black">E</span>
          <span className="black">L</span>
          <span className="blue">C</span>
          <span className="blue">O</span>
          <span className="black">M</span>
          <span className="black">E</span>
        </div>
      </div>
      <div className="description mt-4 text-center">
        <h2>Welcome to belle designstudio</h2>
        <p>Belle Design Studio is an Architecture Firm that helps businesses to do Branding, Events, and Advertising</p>
        </div>
        <Footer />
      </div>
      {/* <Button variant="primary" onClick={handleShow} className="contact-us-button">Contact Us</Button> */}
      {/* <ContactUs show={showModal} handleClose={handleClose} /> */}
    </div>
    
  );
};

export default WelcomeSection;
