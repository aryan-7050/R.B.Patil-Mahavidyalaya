import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const FloatingButtons = () => {
  const { language } = useLanguage();
  const phone = '[ADD SCHOOL PHONE NUMBER]';
  const whatsapp = '[ADD WHATSAPP NUMBER]';
  
  const msg = language === 'mr' 
    ? 'नमस्कार, मला रा. ब. पाटील विद्यालय, सडोली खालसा येथे प्रवेशाबाबत माहिती हवी आहे.'
    : 'Hello, I would like to enquire about admission at R. B. Patil Vidyalaya, Sadoli Khalsa.';

  return (
    <div className="floating-buttons">
      <a href={`tel:${phone}`} className="float-btn call-btn" title="Call">
        <i className="fas fa-phone"></i>
        <span className="tooltip">Call</span>
      </a>
      <a href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`} className="float-btn whatsapp-btn" title="WhatsApp" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
        <span className="tooltip">WhatsApp</span>
      </a>
    </div>
  );
};

export default FloatingButtons;