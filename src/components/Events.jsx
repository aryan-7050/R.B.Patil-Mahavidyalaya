import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Events = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [filter, setFilter] = useState('all');

  const eventsData = [
    { id: 1, category: 'academic', title: '[ADD ACADEMIC EVENT]', date: '[ADD DATE]', desc: '[ADD DESCRIPTION]' },
    { id: 2, category: 'sports', title: '[ADD SPORTS EVENT]', date: '[ADD DATE]', desc: '[ADD DESCRIPTION]' },
    { id: 3, category: 'cultural', title: '[ADD CULTURAL EVENT]', date: '[ADD DATE]', desc: '[ADD DESCRIPTION]' },
    { id: 4, category: 'activities', title: '[ADD SCHOOL ACTIVITY]', date: '[ADD DATE]', desc: '[ADD DESCRIPTION]' },
  ];

  const filtered = filter === 'all' ? eventsData : eventsData.filter(e => e.category === filter);

  const categories = [
    { key: 'all', label: t.all },
    { key: 'academic', label: t.academic },
    { key: 'sports', label: t.sports },
    { key: 'cultural', label: t.cultural },
    { key: 'activities', label: t.schoolActivities },
  ];

  return (
    <section id="events" className="section" style={{ background: 'var(--gray)' }}>
      <div className="container">
        <h2 className="section-title text-center">{t.eventsTitle}</h2>
        <p className="section-subtitle text-center">[ADD EVENTS OVERVIEW]</p>
        
        <div className="event-filters">
          {categories.map(cat => (
            <button 
              key={cat.key}
              className={`event-filter-btn ${filter === cat.key ? 'active' : ''}`}
              onClick={() => setFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="events-grid">
          {filtered.map((item, index) => (
            <div className="event-card fade-up" key={item.id} style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="event-image-placeholder">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="event-body">
                <span className="event-date">{item.date}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <span className="event-category">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;