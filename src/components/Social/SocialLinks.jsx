// src/components/SocialLinks.jsx
import React from 'react';
import './SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className="social-strip">
      <a
        href="https://www.instagram.com/yogacoach_nishkarsh?igsh=MTkxaTNlbTRtZDQzMA%3D%3D&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram"
      >
        <i className="bi bi-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/nishkarsh-jangid-69899535a/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin"
      >
        <i className="bi bi-linkedin"></i>
      </a>
      <a
        href="https://wa.me/917827865868" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
  );
};

export default SocialLinks;
