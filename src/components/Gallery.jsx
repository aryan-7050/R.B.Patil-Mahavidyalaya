import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Gallery = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [filter, setFilter] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryData = [
    { id: 1, category: 'campus', title: 'Campus' },
    { id: 2, category: 'events', title: 'Events' },
    { id: 3, category: 'sports', title: 'Sports' },
    { id: 4, category: 'activities', title: 'Activities' },
    { id: 5, category: 'students', title: 'Students' },
    { id: 6, category: 'campus', title: 'Campus' },
  ];

  const categories = [
    { key: 'all', label: t.all },
    { key: 'campus', label: 'Campus' },
    { key: 'events', label: t.events },
    { key: 'sports', label: t.sports },
    { key: 'activities', label: t.schoolActivities },
    { key: 'students', label: 'Students' },
  ];

  const filtered = filter === 'all' ? galleryData : galleryData.filter(g => g.category === filter);

  const openModal = (item) => {
    setSelectedImage(item);
    setModalOpen(true);
  };

  return (
    <section id="gallery" className="section" style={{ background: 'var(--gray)' }}>
      <div className="container">
        <h2 className="section-title text-center">{t.gallery}</h2>
        <p className="section-subtitle text-center">[ADD GALLERY OVERVIEW]</p>
        
        <div className="gallery-filters">
          {categories.map(cat => (
            <button 
              key={cat.key}
              className={`gallery-filter-btn ${filter === cat.key ? 'active' : ''}`}
              onClick={() => setFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((item, index) => (
            <div 
              className="gallery-item fade-up" 
              key={item.id} 
              onClick={() => openModal(item)}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <div className="gallery-placeholder">
                <i className="fas fa-image"></i>
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        {modalOpen && (
          <div className="gallery-modal" onClick={() => setModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setModalOpen(false)}>&times;</button>
              <div className="modal-image-placeholder">
                <i className="fas fa-image" style={{ fontSize: '4rem', color: '#ccc' }}></i>
                <p>{selectedImage?.title}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;