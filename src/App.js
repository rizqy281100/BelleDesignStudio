import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WelcomeSection from './components/WelcomeSection';
import MyNavbar from './components/MyNavbar.js';
import ContactForm from './components/ContactForm..js';
import AboutUs from './components/AboutUs.js';
import ProjectsClicked from './components/ProjectsClicked.js';
import ProjectDetails from './components/ProjectDetails.js';

library.add(fas, far, fab);

const App = () => {
  return (
    <div className="App">
      {/* <WelcomeSection /> */}
      {/* <ProjectsClicked/> */}
      {/* <AboutUs/> */}
      {/* <ContactForm/> */}

      {/* <Router>
        <Routes>
          <Route path="/" element={<ProjectsClicked />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
    </Router> */}
    </div>
  );
};

export default App;