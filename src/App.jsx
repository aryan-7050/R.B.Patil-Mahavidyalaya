// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // MUST HAVE THIS
import { LanguageProvider } from './context/LanguageContext';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickActions from './components/QuickActions';
import About from './components/About';
import VisionMission from './components/VisionMission';
import WhyChooseUs from './components/WhyChooseUs';
import Facilities from './components/Facilities';
import Staff from './components/Staff';
import PrincipalMessage from './components/PrincipalMessage';
import Events from './components/Events';
import Exams from './components/Exams';
import Achievements from './components/Achievements';
import Admissions from './components/Admissions';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import './App.css';
import './index.css';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.fade-up');
      reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LanguageProvider>
      <Router> {/* Wrap EVERYTHING in Router */}
        <AnnouncementBar />
        <Navbar />
        
        <Routes>
          {/* Main Home Page */}
          <Route path="/" element={
            <>
              <Hero />
              <QuickActions />
              <About />
              <VisionMission />
              <WhyChooseUs />
              <Facilities />
              <Exams />  
              <PrincipalMessage />
              <Staff />
              <Events />
              <Achievements />
              <Admissions />
              <FAQ />
              <Contact />
              <Footer />
              <FloatingButtons />
            </>
          } />

          
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;