import React, { useState } from 'react';
import Profile from '../../assets/img/NJ.jpg';
import SocialLinks from '../Social/SocialLinks';
const Header = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHeader = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close menu on mobile after clicking
    }
  };

  return (
    <header id="header" className={`header dark-background d-flex flex-column ${isOpen ? 'header-show' : ''}`}>
      <i className={`header-toggle d-xl-none bi bi-list ${isOpen ? 'bi-x' : ''}`} onClick={toggleHeader}></i>

      <div className="profile-img">
        <img src={Profile} alt="" className="img-fluid rounded-circle" />
      </div>

      <a href="/" className="logo d-flex align-items-center justify-content-center">
        <h1 className="sitename">Nishkarsh Jangid</h1>
      </a>

      <div className="social-links text-center">
        {/* <a href="#" target='_blank' className="twitter"><i className="bi bi-twitter-x"></i></a>
        <a href="#" target='_blank' className="facebook"><i className="bi bi-facebook"></i></a> */}
        <a href="https://www.instagram.com/yogacoach_nishkarsh?igsh=MTkxaTNlbTRtZDQzMA%3D%3D&utm_source=qr" target='_blank' className="instagram"><i className="bi bi-instagram"></i></a>
        {/* <a href="#" target='_blank' className="google-plus"><i className="bi bi-skype"></i></a> */}
        <a href="https://www.linkedin.com/in/nishkarsh-jangid-69899535a/" target='_blank' className="linkedin"><i className="bi bi-linkedin"></i></a>
        <a
          href="https://wa.me/917827865868" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp"
        >
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a onClick={() => scrollToSection('hero')} className={activeSection === 'hero' ? 'active' : ''}><i className="bi bi-house navicon"></i> Home</a></li>
          <li><a onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}><i className="bi bi-person navicon"></i> About</a></li>
          <li><a onClick={() => scrollToSection('myresume')} className={activeSection === 'myresume' ? 'active' : ''}><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
          <li><a onClick={() => scrollToSection('portfolio')} className={activeSection === 'portfolio' ? 'active' : ''}><i className="bi bi-images navicon"></i> Portfolio</a></li>
          <li><a onClick={() => scrollToSection('services')} className={activeSection === 'services' ? 'active' : ''}><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
          <li><a onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}><i className="bi bi-envelope navicon"></i> Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
