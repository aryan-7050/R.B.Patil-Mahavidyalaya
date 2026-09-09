import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const AnnouncementBar = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="announcement">
      <div className="container">
        <span>{t.announcement}</span> &nbsp;|&nbsp; {t.admissionOpen}
        <button className="btn btn-primary" style={{ padding: '4px 16px', fontSize: '0.8rem', marginLeft: '16px' }}>
          {t.enquireNow}
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;