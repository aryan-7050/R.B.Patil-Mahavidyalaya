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

          {/* School Image */}
          <div className="about-image fade-up">
            <div className="about-img-placeholder">
              <img
                src="/images/IMG-20260908-WA0081.jpg"
                alt="R. B. Patil Vidyalaya, Sadoli Khalsa"
                className="about-school-image"
              />

              <div className="about-image-badge">
                <strong>EST. 1995</strong>
                <span>{t.isoSchool}</span>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="about-text fade-up">

            <span className="section-label">
              {t.aboutLabel}
            </span>

            <h2 className="section-title">
              {t.aboutTitle}
            </h2>

            <p className="about-intro">
              {t.aboutText}
            </p>

            <p>
              {t.aboutHistory}
            </p>

          
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;