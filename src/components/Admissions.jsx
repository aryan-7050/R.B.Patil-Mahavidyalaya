import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const PHONE_DISPLAY   = '9822478996';
const PHONE_DIAL      = '+919822478996';
const WHATSAPP_DISPLAY = '9822459656';
const WHATSAPP_LINK    = 'https://wa.me/919822459656';

const Admissions = () => {
  const { language } = useLanguage();
  const t = translations[language] ?? translations.en;   // ✅ fallback

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
            <div className="step-card fade-up" key={index}
                 style={{ transitionDelay: `${index * 0.1}s` }}>
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
          <a
            href={`tel:${PHONE_DIAL}`}
            className="btn btn-primary admission-btn"
            aria-label={`Call admission at ${PHONE_DISPLAY}`}
          >
            <i className="fas fa-phone" aria-hidden="true"></i>
            <span>{t.callAdmission || 'Call for Admission'}: {PHONE_DISPLAY}</span>
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-navy admission-btn"
            aria-label={`WhatsApp enquiry at ${WHATSAPP_DISPLAY}`}
          >
            <i className="fab fa-whatsapp" aria-hidden="true"></i>
            <span>{t.whatsappEnquiry || 'WhatsApp Enquiry'}: {WHATSAPP_DISPLAY}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Admissions;