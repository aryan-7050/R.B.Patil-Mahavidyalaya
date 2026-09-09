import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const FAQ = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: t.faq1, a: t.faq1Ans },
    { q: t.faq2, a: t.faq2Ans },
    { q: t.faq3, a: t.faq3Ans },
    { q: t.faq4, a: t.faq4Ans },
    { q: t.faq5, a: t.faq5Ans },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section" style={{ background: 'var(--gray)' }}>
      <div className="container">
        <h2 className="section-title text-center">{t.faqTitle}</h2>
        <p className="section-subtitle text-center">[ADD FAQ OVERVIEW]</p>
        
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div className="faq-item fade-up" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="faq-question" onClick={() => toggle(index)}>
                <span>{item.q}</span>
                <i className={`fas ${openIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;