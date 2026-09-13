import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    student: '',
    class: '',
    type: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Data:', formData);

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };


  const latitude = 16.6027422;
  const longitude = 74.1417668;

  // Google Maps Embed URL
  const mapEmbedUrl =
    `https://maps.google.com/maps?q=${latitude},${longitude}&z=17&output=embed`;

  // Open location in Google Maps
  const fullMapUrl =
    `https://www.google.com/maps?q=${latitude},${longitude}`;

  // Get Directions
  const directionsUrl =
    `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;


  const schoolInfo = {
    name: 'R. B. Patil Vidyalaya',
    address:
      'Sadoli Khalsa, Taluka Karvir, District Kolhapur, Maharashtra, India',
    phone: '9822478996',
    email: 'sadolikhalsarbpvsr@gmail.com',
    rating: '★★★★★',
    reviews: 'No reviews yet',
    type: 'High School',
    status: 'Open'
  };

  return (
    <section id="contact" className="section">
      <div className="container">


        <h2 className="section-title text-center">
          {t.contactTitle}
        </h2>

        <p className="section-subtitle text-center">
          Get in touch with us
        </p>

        <div className="contact-wrapper">


          <div className="contact-left">

            <div className="contact-form-card">

              <h3>Send us a Message</h3>

              <form onSubmit={handleSubmit}>

                {/* Name */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder={t.fullName}
                  onChange={handleChange}
                  required
                />

                {/* Phone */}
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  placeholder={t.phoneNumber}
                  onChange={handleChange}
                  required
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email Address"
                  onChange={handleChange}
                />

                {/* Student Name */}
                <input
                  type="text"
                  name="student"
                  value={formData.student}
                  placeholder={t.studentName}
                  onChange={handleChange}
                />

                {/* Class */}
                <input
                  type="text"
                  name="class"
                  value={formData.class}
                  placeholder={t.class}
                  onChange={handleChange}
                />

                {/* Enquiry Type */}
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="">
                    {t.enquiryType}
                  </option>

                  <option value="admission">
                    Admission
                  </option>

                  <option value="general">
                    General
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>

                {/* Message */}
                <textarea
                  name="message"
                  value={formData.message}
                  placeholder={t.message}
                  rows="4"
                  onChange={handleChange}
                ></textarea>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  {t.submit}
                </button>

              </form>

              {/* Success Message */}
              {submitted && (
                <div className="success-msg">
                  {t.successMsg}
                </div>
              )}

            </div>
          </div>


          <div className="contact-right">

            <div className="map-container-full">


              <div className="map-sidebar">

                <div className="map-sidebar-header">

                  <div className="school-name-icon">

                    <div className="school-icon">
                      🏫
                    </div>

                    <h3>
                      {schoolInfo.name}
                    </h3>

                  </div>

                  <p className="school-address">
                    <i className="fas fa-map-pin"></i>

                    {schoolInfo.address}
                  </p>

                  <div className="school-rating">

                    <span className="stars">
                      {schoolInfo.rating}
                    </span>

                    <span className="reviews">
                      {schoolInfo.reviews}
                    </span>

                  </div>

                  <div className="school-type">

                    <span className="type-badge">
                      {schoolInfo.type}
                    </span>

                    <span className="status-badge open">
                      {schoolInfo.status}
                    </span>

                  </div>

                </div>


                <div className="map-sidebar-info">

                  {/* Phone */}
                  <div className="info-item">

                    <i className="fas fa-phone"></i>

                    <div>
                      <span className="info-label">
                        Phone
                      </span>

                      <a
                        href={`tel:${schoolInfo.phone}`}
                        className="info-value"
                      >
                        {schoolInfo.phone}
                      </a>
                    </div>

                  </div>

                  {/* Email */}
                  <div className="info-item">

                    <i className="fas fa-envelope"></i>

                    <div>
                      <span className="info-label">
                        Email
                      </span>

                      <a
                        href={`mailto:${schoolInfo.email}`}
                        className="info-value"
                      >
                        {schoolInfo.email}
                      </a>
                    </div>

                  </div>

                  {/* Hours */}
                  <div className="info-item">

                    <i className="fas fa-clock"></i>

                    <div>
                      <span className="info-label">
                        Hours
                      </span>

                      <span className="info-value">
                        Mon - Sat: 8:00 AM - 5:00 PM
                      </span>
                    </div>

                  </div>

                </div>

                <div className="map-sidebar-actions">

                  {/* Directions */}
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary map-btn"
                  >
                    <i className="fas fa-directions"></i>

                    Get Directions
                  </a>

                  {/* Larger Map */}
                  <a
                    href={fullMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline map-btn"
                  >
                    <i className="fas fa-map"></i>

                    View Larger Map
                  </a>

                </div>

              </div>


              <div className="map-embed-container">

                <iframe
                  title="R. B. Patil Vidyalaya Location"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Expand Button */}
                <div className="map-overlay-controls">

                  <button
                    className="map-control-btn"
                    onClick={() =>
                      window.open(
                        fullMapUrl,
                        '_blank',
                        'noopener,noreferrer'
                      )
                    }
                    aria-label="Open Google Maps"
                  >
                    <i className="fas fa-expand"></i>
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

