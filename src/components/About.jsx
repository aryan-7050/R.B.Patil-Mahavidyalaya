import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image fade-up">
            <div className="about-img-placeholder">
              <i className="fas fa-school"></i>
              <span>School Image</span>
            </div>
          </div>
          <div className="about-text fade-up">
            <h2 className="section-title">{t.aboutTitle}</h2>
            <p>{t.aboutText}</p>
            <p className="about-placeholder">{t.aboutPlaceholder}</p>
            <button className="btn btn-primary">{t.learnMore}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;