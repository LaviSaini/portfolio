import React from "react";

const Footer = ({ activeSection }) => {
  
  const handleClick = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="footer position-relative">
        <div className="container">
          <div className="copyright text-center">
            <p>
              © <span>Copyright</span>{" "}
              <strong className="px-1 sitename">Nishkarsh Jangid</strong>{" "}
              <span>All Rights Reserved</span>
            </p>
          </div>
          {/* <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div> */}
        </div>
      </footer>

      {/* Scroll to Home button (only visible when activeSection === 'about') */}
      {activeSection !== 'hero' && (
        <a
          role="button"
          className="scroll-top d-flex align-items-center justify-content-center active"
          onClick={handleClick}
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
      )}
    </>
  );
};

export default Footer;
