// import React from 'react';
// import { useLanguage } from '../context/LanguageContext';
// import { translations } from '../data/translations';
// import { staffData } from '../data/staff';

// const Staff = () => {
//   const { language } = useLanguage();
//   const t = translations[language];

//   // Combine all staff for display
//   const allStaff = [
//     { ...staffData.principal, role: 'principal' },
//     ...staffData.teaching.map((s) => ({ ...s, role: 'teaching' })),
//     ...staffData.nonTeaching.map((s) => ({ ...s, role: 'non-teaching' })),
//   ];

//   // Helper: get initials from name (for avatar placeholder)
//   const getInitials = (name = '') => {
//     const clean = name.replace(/[^\p{L}\p{N}\s]/gu, ' ').trim();
//     if (!clean) return '?';
//     const parts = clean.split(/\s+/);
//     if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
//     return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
//   };

//   // Helper: pick a background color based on name (so each avatar has a color)
//   const avatarColors = [
//     '#0a2540', '#1a4b7a', '#c9a84c', '#2e7d32',
//     '#ad1457', '#4a148c', '#00695c', '#e65100',
//   ];
//   const getAvatarColor = (name = '') => {
//     let sum = 0;
//     for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
//     return avatarColors[sum % avatarColors.length];
//   };

//   const displayName = (item) =>
//     language === 'mr' ? item.nameMr || item.name : item.name;

//   const displayDesignation = (item) =>
//     language === 'mr'
//       ? item.designationMr || item.designation
//       : item.designation;

//   const displaySubject = (item) =>
//     language === 'mr' ? item.subjectMr || item.subject : item.subject;

//   return (
//     <section id="staff" className="section" style={{ background: 'var(--gray)' }}>
//       <div className="container">
//         <h2 className="section-title text-center">{t.staffTitle}</h2>
//         <p className="section-subtitle text-center">
//           {language === 'mr'
//             ? 'आमच्या समर्पित टीमला भेटा'
//             : 'Meet our dedicated team'}
//         </p>

//         <div className="staff-grid">
//           {allStaff.map((item, index) => {
//             const name = displayName(item);
//             const hasImage = item.image && item.image.trim() !== '';

//             return (
//               <div
//                 className="staff-card fade-up"
//                 key={index}
//                 style={{ transitionDelay: `${index * 0.1}s` }}
//               >
//                 <div className="staff-photo">
//                   {hasImage ? (
//                     <img
//                       src={item.image}
//                       alt={name || 'Staff member'}
//                       className="staff-photo-img"
//                       onError={(e) => {
//                         e.currentTarget.style.display = 'none';
//                         if (e.currentTarget.nextElementSibling) {
//                           e.currentTarget.nextElementSibling.style.display = 'flex';
//                         }
//                       }}
//                     />
//                   ) : null}

//                   {/* Avatar placeholder (initials) */}
//                   <div
//                     className="staff-avatar-placeholder"
//                     style={{
//                       display: hasImage ? 'none' : 'flex',
//                       background: `linear-gradient(135deg, ${getAvatarColor(
//                         name
//                       )} 0%, ${getAvatarColor(name)}cc 100%)`,
//                     }}
//                   >
//                     <span className="staff-avatar-initials">
//                       {getInitials(name)}
//                     </span>
//                     <i className="fas fa-user staff-avatar-icon"></i>
//                   </div>
//                 </div>

//                 <h4>{name}</h4>
//                 <p className="staff-role">{displayDesignation(item)}</p>
//                 {item.subject && (
//                   <p className="staff-subject">{displaySubject(item)}</p>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         <div className="text-center" style={{ marginTop: '2rem' }}>
//           <button className="btn btn-primary">{t.viewAll}</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Staff;