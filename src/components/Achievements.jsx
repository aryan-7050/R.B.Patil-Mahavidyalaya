import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Achievements = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="section-title text-center">{t.achievementsTitle}</h2>
        <p className="section-subtitle text-center">{t.achievementPlaceholder}</p>
        <div className="achievements-grid">
          <div className="achievement-card fade-up">
            <i className="fas fa-trophy"></i>
            <h4>Academic</h4>
            <p>[ADD OFFICIAL ACHIEVEMENTS]</p>
          </div>
          <div className="achievement-card fade-up" style={{ transitionDelay: '0.1s' }}>
            <i className="fas fa-medal"></i>
            <h4>Sports</h4>
            <p>[ADD OFFICIAL ACHIEVEMENTS]</p>
          </div>
          <div className="achievement-card fade-up" style={{ transitionDelay: '0.2s' }}>
            <i className="fas fa-music"></i>
            <h4>Cultural</h4>
            <p>[ADD OFFICIAL ACHIEVEMENTS]</p>
          </div>
          <div className="achievement-card fade-up" style={{ transitionDelay: '0.3s' }}>
            <i className="fas fa-award"></i>
            <h4>Competitions</h4>
            <p>[ADD OFFICIAL ACHIEVEMENTS]</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;