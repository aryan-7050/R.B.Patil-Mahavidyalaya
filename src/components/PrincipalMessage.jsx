import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const PrincipalMessage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="section">
      <div className="container">
        <div className="principal-grid">
          <div className="principal-photo fade-up">
            <div className="principal-img-placeholder">
              <img
                src="/images/WhatsApp Image 2026-09-13 at 3.24.44 PM.jpeg"
                alt="R. B. Patil Vidyalaya, Sadoli Khalsa"
                className="principal-img"
              />
            </div>
          </div>
          <div className="principal-text fade-up">
            <h2 className="section-title">{t.principalMsg}</h2>
            <div className="principal-quote">
              <i className="fas fa-quote-left"></i>
              <p>{t.principalMsgPlaceholder}</p>
            </div>
            <h4 className="principal-name">{t.principalPlaceholder}</h4>
            <p className="principal-role">{t.principal}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;