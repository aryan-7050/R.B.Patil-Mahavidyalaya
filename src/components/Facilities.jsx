import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { facilitiesData } from '../data/facilities';

const Facilities = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="facilities" className="section">
      <div className="container">
        <h2 className="section-title text-center">{t.facilitiesTitle}</h2>
        <p className="section-subtitle text-center">Explore our world-class facilities</p>
        <div className="facilities-grid">
          {facilitiesData.map((item, index) => (
            <div className="facility-card fade-up" key={item.id} style={{ transitionDelay: `${index * 0.05}s` }}>
              <div className="facility-icon"><i className={`fas ${item.icon}`}></i></div>
              <h4>{language === 'mr' ? item.nameMr : item.name}</h4>
              <p>{language === 'mr' ? item.descriptionMr : item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;