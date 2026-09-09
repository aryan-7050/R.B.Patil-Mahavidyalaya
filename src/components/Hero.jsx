import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

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
          <span className="hero-badge-text">EST. [1995]</span>
        </div>
        <h1 className="hero-title">{t.schoolName}</h1>
        <p className="hero-location">{t.location}</p>
        <h2 className="hero-tagline">{t.tagline}</h2>
        <p className="hero-sub">{t.taglineEn}</p>
        <p className="hero-desc">{t.heroDesc}</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">{t.exploreBtn}</button>
          <button className="btn btn-outline">{t.admissionBtn}</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;