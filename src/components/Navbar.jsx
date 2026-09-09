import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', label: t.home },
    { key: 'about', label: t.about },
    { key: 'academics', label: t.academics },
    { key: 'facilities', label: t.facilities },
    { key: 'staff', label: t.staff },
    { key: 'events', label: t.events },
    { key: 'admissions', label: t.admissions },
    { key: 'gallery', label: t.gallery },
    { key: 'contact', label: t.contact },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-logo">
          {/* School Logo Image */}
          <img 
            src="/images/WhatsApp%20Image%202026-09-07%20at%202.46.32%20PM.jpeg" 
            alt="R. B. Patil Vidyalaya Logo" 
            className="school-logo-img"
          />
          <div className="nav-logo-text">
            <span className="school-name">रा. बा. पाटील विद्यालय सडोली (खालसा)</span>
            <span className="school-name-en">R. B. Patil Vidyalaya Sadoli(khalasa)</span>
          </div>
        </div>

        <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <li key={item.key}>
              <a href={`#${item.key}`}>{item.label}</a>
            </li>
          ))}
          <li>
            <div className="lang-toggle">
              <button 
                className={language === 'en' ? 'active' : ''} 
                onClick={() => toggleLanguage()}
              >
                English
              </button>
              <button 
                className={language === 'mr' ? 'active' : ''} 
                onClick={() => toggleLanguage()}
              >
                मराठी
              </button>
            </div>
          </li>
        </ul>

        <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;