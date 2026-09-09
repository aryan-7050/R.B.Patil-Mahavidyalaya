import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <div className="logo-icon">RBP</div>
              <span>R. B. Patil Vidyalaya</span>
            </div>
            <p>Building Knowledge, Character & a Brighter Future</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>{t.quickLinks}</h4>
            <a href="#about">{t.about}</a>
            <a href="#academics">{t.academics}</a>
            <a href="#facilities">{t.facilities}</a>
            <a href="#admissions">{t.admissions}</a>
          </div>
          <div className="footer-col">
            <h4>{t.importantSections}</h4>
            <a href="#events">{t.events}</a>
            <a href="#gallery">{t.gallery}</a>
            <a href="#contact">{t.contact}</a>
          </div>
          <div className="footer-col">
            <h4>{t.contact}</h4>
            <p>{t.address}</p>
            <p>{t.phone}</p>
            <p>{t.email}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t.rights}</p>
          <p>{t.designed}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;