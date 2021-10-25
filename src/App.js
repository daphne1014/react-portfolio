import React, { useState } from 'react';
import './App.css';
import './assets/css/Header.css'
import './assets/css/About.css'
import './assets/css/Home.css'
import './assets/css/Contact.css'
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [projectSelected, setProjectSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  return (
    <div className="App">
      <Header
        aboutSelected = {aboutSelected}
        setAboutSelected = {setAboutSelected}
        projectSelected={projectSelected}
        setProjectSelected={setProjectSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      />

      {!aboutSelected && !projectSelected && !contactSelected &&!resumeSelected ? (
        <>
          <Home />
          <About />
        </>
      ) : aboutSelected? (
        <About />
      ):  contactSelected ? (
        <ContactForm />
      ):  resumeSelected ? (
        <Resume />
      ): (
        <Projects />
      )}
      
      <Footer />
    </div>
  );
}

export default App;
