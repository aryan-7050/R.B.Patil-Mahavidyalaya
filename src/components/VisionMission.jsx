// src/components/VisionMission.jsx
import React from 'react'; 
import { useLanguage } from '../context/LanguageContext'; 
import { translations } from '../data/translations'; 
 
const VisionMission = () => { 
  const { language } = useLanguage(); 
  const t = translations[language]; 
 
  return ( 
    <section className="section" style={{ background: 'var(--gray)' }}> 
      <div className="container"> 
        <div className="vision-grid"> {/* No inline styles! */}
          
          <div className="vision-card fade-up"> 
            <div className="vision-icon"><i className="fas fa-eye"></i></div> 
            <h3>{t.vision}</h3> 
            <p>{t.visionPlaceholder}</p> 
          </div> 
          
          <div className="vision-card fade-up" style={{ transitionDelay: '0.2s' }}> 
            <div className="vision-icon"><i className="fas fa-bullseye"></i></div> 
            <h3>{t.mission}</h3> 
            <p>{t.missionPlaceholder}</p> 
          </div> 

        </div> 
      </div> 
    </section> 
  ); 
}; 
 
export default VisionMission;