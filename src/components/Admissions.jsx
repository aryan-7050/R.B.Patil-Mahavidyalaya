import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Admissions = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const steps = [
    { num: '01', title: t.step1, desc: t.step1Desc },
    { num: '02', title: t.step2, desc: t.step2Desc },
    { num: '03', title: t.step3, desc: t.step3Desc },
    { num: '04', title: t.step4, desc: t.step4Desc },
  ];

  return (
    <section id="admissions" className="section">
      <div className="container">
        <h2 className="section-title text-center">{t.admissionsTitle}</h2>
        <p className="section-subtitle text-center">{t.admissionsDesc}</p>
        
        <div className="admission-steps">
          {steps.map((step, index) => (
            <div className="step-card fade-up" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="step-number">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="admission-info">
          <p><strong>{t.admissionProcess}</strong></p>
          <p><strong>{t.requiredDocs}</strong></p>
          <p><strong>{t.admissionDates}</strong></p>
        </div>

        <div className="admission-cta">
          <button className="btn btn-primary" style={{ marginRight: '16px' }}>
            <i className="fas fa-phone"></i> {t.callAdmission}
          </button>
          <button className="btn btn-navy">
            <i className="fab fa-whatsapp"></i> {t.whatsappEnquiry}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Admissions;