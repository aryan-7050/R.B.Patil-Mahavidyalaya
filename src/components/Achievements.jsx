import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Achievements = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="achievements" className="section py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center text-3xl font-bold mb-2">{t.achievementsTitle}</h2>
        <p className="section-subtitle text-center text-gray-600 mb-12 max-w-2xl mx-auto">{t.achievementPlaceholder}</p>
        
        <div className="achievements-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Academic Achievements */}
          <div className="achievement-card bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-blue-600 transform hover:-translate-y-1 transition duration-300 ease-in-out fade-up">
            <div className="icon-wrapper text-blue-600 text-4xl mb-4">
              <i className="fas fa-trophy"></i>
            </div>
            <h4 className="text-xl font-semibold mb-3">{t.academicTitle || 'Academic Excellence'}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{t.academicDesc}</p>
          </div>

          {/* Sports Achievements */}
          <div className="achievement-card bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-green-600 transform hover:-translate-y-1 transition duration-300 ease-in-out fade-up" style={{ transitionDelay: '0.1s' }}>
            <div className="icon-wrapper text-green-600 text-4xl mb-4">
              <i className="fas fa-medal"></i>
            </div>
            <h4 className="text-xl font-semibold mb-3">{t.sportsTitle || 'Sports & Athletics'}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{t.sportsDesc}</p>
          </div>

          {/* Infrastructure & Recognition (Replacing Generic Cultural) */}
          <div className="achievement-card bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-purple-600 transform hover:-translate-y-1 transition duration-300 ease-in-out fade-up" style={{ transitionDelay: '0.2s' }}>
            <div className="icon-wrapper text-purple-600 text-4xl mb-4">
              <i className="fas fa-ribbon"></i>
            </div>
            <h4 className="text-xl font-semibold mb-3">{t.recognitionTitle || 'Accreditations'}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{t.recognitionDesc}</p>
          </div>

          {/* Competitive Exams & Competitions */}
          <div className="achievement-card bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-amber-500 transform hover:-translate-y-1 transition duration-300 ease-in-out fade-up" style={{ transitionDelay: '0.3s' }}>
            <div className="icon-wrapper text-amber-500 text-4xl mb-4">
              <i className="fas fa-award"></i>
            </div>
            <h4 className="text-xl font-semibold mb-3">{t.competitionsTitle || 'Competitive Exams'}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{t.competitionsDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
