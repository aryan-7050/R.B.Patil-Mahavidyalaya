// src/components/Exams.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Exams = () => {
  const { language } = useLanguage();

  const examsData = {
    scholarship: {
      title: 'Scholarship Exams',
      titleMr: 'शिष्यवृत्ती परीक्षा',
      exams: [
        { name: '5th to 7th Scholarship', nameMr: 'इ. 5 वी ते 7 वी स्कॉलरशिप' },
        { name: '8th Scholarship', nameMr: '8 वी स्कॉलरशिप' },
        { name: 'NMMS', nameMr: 'NMMS' },
        { name: 'NTS', nameMr: 'NTS' },
        { name: 'Sarathi Scholarship', nameMr: 'सारथी शिष्यवृत्ती' },
        { name: 'Navodaya Entrance Exam', nameMr: 'नवोदय विद्यालय प्रवेश परीक्षा' }
      ]
    },
    competitive: {
      title: 'Competitive & Board Exams',
      titleMr: 'स्पर्धा व बोर्ड परीक्षा',
      exams: [
        { name: 'S.S.C. Board Exam', nameMr: 'S.S.C. बोर्ड परीक्षा' },
        { name: 'RTS', nameMr: 'RTS' },
        { name: 'Drawing Grade Exam', nameMr: 'चित्रकला परीक्षा' },
        { name: 'Govt. Drawing Grade Board Exam Center', nameMr: 'शासकीय चित्रकला ग्रेड बोर्ड परीक्षा केंद्र' }
      ]
    },
    campus: {
      title: 'Campus Achievements',
      titleMr: 'कॅम्पस यश',
      levels: [
        { name: 'District Level', nameMr: 'जिल्हा स्तर' },
        { name: 'State Level', nameMr: 'राज्य स्तर' }
      ]
    },
    skills: {
      title: 'Skills Development',
      titleMr: 'कौशल्य विकास',
      programs: [
        { name: 'SIV (Skill Integrated Vocational)', nameMr: 'एसआयव्ही' },
        { name: 'Atal Tinkering Lab', nameMr: 'अटल टिंकरिंग लॅब' }
      ]
    }
  };

  return (
    <section id="exams" className="section" style={{ background: 'var(--gray)' }}>
      <div className="container">
        <h2 className="section-title text-center">Examinations & Achievements</h2>
        <p className="section-subtitle text-center">विविध स्पर्धा व शिष्यवृत्ती परीक्षांचे मार्गदर्शन</p>
        
        <div className="exams-grid">
          {/* Scholarship Exams */}
          <div className="exam-card fade-up">
            <div className="exam-icon"><i className="fas fa-award"></i></div>
            <h4>{language === 'mr' ? examsData.scholarship.titleMr : examsData.scholarship.title}</h4>
            <ul className="exam-list">
              {examsData.scholarship.exams.map((exam, idx) => (
                <li key={idx}>{language === 'mr' ? exam.nameMr : exam.name}</li>
              ))}
            </ul>
          </div>

          {/* Competitive & Board Exams */}
          <div className="exam-card fade-up" style={{ transitionDelay: '0.1s' }}>
            <div className="exam-icon"><i className="fas fa-trophy"></i></div>
            <h4>{language === 'mr' ? examsData.competitive.titleMr : examsData.competitive.title}</h4>
            <ul className="exam-list">
              {examsData.competitive.exams.map((exam, idx) => (
                <li key={idx}>{language === 'mr' ? exam.nameMr : exam.name}</li>
              ))}
            </ul>
          </div>

          {/* Campus Achievements */}
          <div className="exam-card fade-up" style={{ transitionDelay: '0.2s' }}>
            <div className="exam-icon"><i className="fas fa-map-marker-alt"></i></div>
            <h4>{language === 'mr' ? examsData.campus.titleMr : examsData.campus.title}</h4>
            <ul className="exam-list">
              {examsData.campus.levels.map((level, idx) => (
                <li key={idx}>{language === 'mr' ? level.nameMr : level.name}</li>
              ))}
            </ul>
          </div>

          {/* Skills Development */}
          <div className="exam-card fade-up" style={{ transitionDelay: '0.3s' }}>
            <div className="exam-icon"><i className="fas fa-tools"></i></div>
            <h4>{language === 'mr' ? examsData.skills.titleMr : examsData.skills.title}</h4>
            <ul className="exam-list">
              {examsData.skills.programs.map((program, idx) => (
                <li key={idx}>{language === 'mr' ? program.nameMr : program.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exams;