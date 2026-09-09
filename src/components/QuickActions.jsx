import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const QuickActions = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const actions = [
    { icon: 'fa-graduation-cap', title: t.quickAdmissions, desc: t.quickAdmissionsDesc, link: '#admissions' },
    { icon: 'fa-book-open', title: t.quickAcademics, desc: t.quickAcademicsDesc, link: '#academics' },
    { icon: 'fa-building', title: t.quickFacilities, desc: t.quickFacilitiesDesc, link: '#facilities' },
    { icon: 'fa-phone-alt', title: t.quickContact, desc: t.quickContactDesc, link: '#contact' },
  ];

  return (
    <section className="quick-actions">
      <div className="container">
        <div className="quick-grid">
          {actions.map((item, index) => (
            <a href={item.link} key={index} className="quick-card">
              <div className="quick-icon"><i className={`fas ${item.icon}`}></i></div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="quick-cta">{t.exploreBtn} →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;