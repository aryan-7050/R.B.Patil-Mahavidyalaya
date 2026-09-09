import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { staffData } from '../data/staff';

const Staff = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Combine all staff for display
  const allStaff = [
    { ...staffData.principal, role: 'principal' },
    ...staffData.teaching.map(s => ({ ...s, role: 'teaching' })),
    ...staffData.nonTeaching.map(s => ({ ...s, role: 'non-teaching' }))
  ];

  return (
    <section id="staff" className="section" style={{ background: 'var(--gray)' }}>
      <div className="container">
        <h2 className="section-title text-center">{t.staffTitle}</h2>
        <p className="section-subtitle text-center">Meet our dedicated team</p>
        
        <div className="staff-grid">
          {allStaff.map((item, index) => (
            <div className="staff-card fade-up" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="staff-photo-placeholder">
                <i className="fas fa-user-graduate"></i>
                <span>[ADD STAFF PHOTO]</span>
              </div>
              <h4>{language === 'mr' ? (item.nameMr || item.name) : item.name}</h4>
              <p className="staff-role">{language === 'mr' ? (item.designationMr || item.designation) : item.designation}</p>
              <p className="staff-subject">{language === 'mr' ? (item.subjectMr || item.subject) : item.subject}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{ marginTop: '2rem' }}>
          <button className="btn btn-primary">{t.viewAll}</button>
        </div>
      </div>
    </section>
  );
};

export default Staff;