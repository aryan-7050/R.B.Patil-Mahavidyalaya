import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Events = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [filter, setFilter] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null); // for gallery modal
  const [lightbox, setLightbox] = useState(null); // { images, index } for fullscreen single photo

  const eventsData = [
    {
      id: 1,
      category: 'academic',
      title: 'Academic Activities',
      date: '13th June 2024',
      desc: 'Academic activities and learning initiatives conducted by R. B. Patil Vidyalaya to support students knowledge and overall development.',
      images: [
        '/images/IMG-20260908-WA0162.jpg',
        '/images/IMG-20260908-WA0014.jpg',
        '/images/IMG-20260908-WA0093.jpg',
      ],
    },
    {
      id: 2,
      category: 'sports',
      title: 'Sports Activities',
      date: '24th December 2025',
      desc: 'Sports and physical activities that encourage fitness, teamwork, discipline and a healthy competitive spirit among students.',
      images: [
        '/images/IMG-20260908-WA0192.jpg',
        '/images/IMG-20260908-WA0189.jpg',
        '/images/IMG-20260909-WA0022.jpg',
        '/images/IMG-20260908-WA0185.jpg',
      ],
    },
    {
      id: 3,
      category: 'cultural',
      title: 'Cultural Activities',
      date: '10th January 2025',
      desc: 'Cultural activities that provide students with opportunities to showcase their talents, creativity and cultural values.',
      images: [
        '/images/IMG-20260908-WA0080.jpg',
        '/images/IMG-20260909-WA0013.jpg',
        '/images/IMG-20260908-WA0216.jpg',
        '/images/IMG-20260908-WA0067.jpg',
      ],
    },
    {
      id: 4,
      category: 'activities',
      title: 'School Activities',
      desc: 'Various co-curricular and student development activities conducted to build confidence, creativity, teamwork and leadership skills.',
      images: [
        '/images/IMG-20260908-WA0085.jpg',
        '/images/WhatsApp Image 2026-09-13 at 8.46.02 AM.jpeg',
        '/images/WhatsApp Image 2026-09-13 at 8.17.39 AM.jpeg',
        '/images/IMG-20260908-WA0148.jpg',
        '/images/WhatsApp Image 2026-09-13 at 8.17.39 AM (1).jpeg',
      ],
    },
  ];

  const filtered = filter === 'all' ? eventsData : eventsData.filter(e => e.category === filter);

  const categories = [
    { key: 'all', label: t.all },
    { key: 'academic', label: t.academic },
    { key: 'sports', label: t.sports },
    { key: 'cultural', label: t.cultural },
    { key: 'activities', label: t.schoolActivities },
  ];

  // Open a specific image in fullscreen lightbox
  const openLightbox = (images, index) => {
    setLightbox({ images, index });
  };

  // Navigate in lightbox
  const lightboxPrev = (e) => {
    if (e) e.stopPropagation();
    if (!lightbox) return;
    setLightbox({
      ...lightbox,
      index: lightbox.index === 0 ? lightbox.images.length - 1 : lightbox.index - 1,
    });
  };

  const lightboxNext = (e) => {
    if (e) e.stopPropagation();
    if (!lightbox) return;
    setLightbox({
      ...lightbox,
      index: (lightbox.index + 1) % lightbox.images.length,
    });
  };

  // Keyboard controls: Esc closes, ← → navigate
  useEffect(() => {
    const handleKey = (e) => {
      if (lightbox) {
        if (e.key === 'Escape') setLightbox(null);
        if (e.key === 'ArrowLeft') lightboxPrev();
        if (e.key === 'ArrowRight') lightboxNext();
      } else if (selectedEvent && e.key === 'Escape') {
        setSelectedEvent(null);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox, selectedEvent]);

  return (
    <section id="events" className="section" style={{ background: 'var(--gray)' }}>
      <div className="container">
        <h2 className="section-title text-center">{t.eventsTitle}</h2>
        {/* <p className="section-subtitle text-center">[ADD EVENTS OVERVIEW]</p> */}

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
            <div
              className="event-card fade-up"
              key={item.id}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Main image — click opens the gallery modal */}
              <div
                className="event-image"
                onClick={() => setSelectedEvent(item)}
                style={{ cursor: 'pointer', position: 'relative' }}
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x250?text=Event+Image';
                  }}
                />

                {/* Badge showing image count */}
                {item.images.length > 1 && (
                  <span className="image-count-badge">
                    <i className="fas fa-images"></i> {item.images.length}
                  </span>
                )}
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

      {/* ===== GALLERY MODAL (grid of all images for one event) ===== */}
      {selectedEvent && (
        <div className="event-modal" onClick={() => setSelectedEvent(null)}>
          <div className="event-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="event-modal-close" onClick={() => setSelectedEvent(null)}>
              &times;
            </button>
            <h3>{selectedEvent.title}</h3>
            <div className="event-modal-gallery">
              {selectedEvent.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${selectedEvent.title} ${i + 1}`}
                  // Clicking a photo opens THAT specific photo in fullscreen
                  onClick={() => openLightbox(selectedEvent.images, i)}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x250?text=Event+Image';
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ===== FULLSCREEN LIGHTBOX (single big photo) ===== */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
          >
            &times;
          </button>

          {lightbox.images.length > 1 && (
            <button className="lightbox-nav prev" onClick={lightboxPrev}>
              &#8249;
            </button>
          )}

          <img
            className="lightbox-img"
            src={lightbox.images[lightbox.index]}
            alt="Preview"
            onClick={(e) => e.stopPropagation()}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/800x500?text=Event+Image';
            }}
          />

          {lightbox.images.length > 1 && (
            <button className="lightbox-nav next" onClick={lightboxNext}>
              &#8250;
            </button>
          )}

          {lightbox.images.length > 1 && (
            <div className="lightbox-counter">
              {lightbox.index + 1} / {lightbox.images.length}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Events;