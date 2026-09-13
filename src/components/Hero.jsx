import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Function to scroll smoothly to the Contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to scroll to the "About / Explore School" section (optional)
  const scrollToExplore = () => {
    const aboutSection = document.getElementById('about'); // Ensure your About section has id="about"
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="hero"
      style={{
        backgroundImage: `url('/images/IMG-20260908-WA0059.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-badge">
          {/* Updated badge based on your poster info */}
          <span className="hero-badge-text">🏛️ ISO मानांकित शाळा | EST. [1995]</span>
        </div>
        <h1 className="hero-title">{t.schoolName}</h1>
        <p className="hero-location">{t.location}</p>
        <h2 className="hero-tagline">{t.tagline}</h2>
        <p className="hero-sub">{t.taglineEn}</p>
        <p className="hero-desc">{t.heroDesc}</p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={scrollToExplore}>
            {t.exploreBtn}
          </button>
          <button className="btn btn-outline" onClick={scrollToContact}>
            {t.admissionBtn}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;