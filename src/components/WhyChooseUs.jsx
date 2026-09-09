import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const WhyChooseUs = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    { icon: 'fa-award', title: t.quality, desc: t.qualityDesc },
    { icon: 'fa-chalkboard-teacher', title: t.faculty, desc: t.facultyDesc },
    { icon: 'fa-user-graduate', title: t.development, desc: t.developmentDesc },
    { icon: 'fa-handshake', title: t.discipline, desc: t.disciplineDesc },
    { icon: 'fa-palette', title: t.coCurricular, desc: t.coCurricularDesc },
    { icon: 'fa-heart', title: t.supportive, desc: t.supportiveDesc },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title text-center">{t.whyChoose}</h2>
        <p className="section-subtitle text-center">[ADD SCHOOL'S UNIQUE VALUE PROPOSITION]</p>
        <div className="features-grid">
          {features.map((item, index) => (
            <div className="feature-card fade-up" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="feature-icon"><i className={`fas ${item.icon}`}></i></div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;