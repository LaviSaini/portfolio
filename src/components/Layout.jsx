import React,{useState,useEffect} from 'react';

import './Layout.css';
import Header from './Header/header';
import Home from './Home/home';
import About from './About/about';
import Resume from './Resume/resume';
import Footer from './Footer/footer';
import Portfolio from './Portfolio/portfolio';
import Roles from './Roles/roles';
import Contact from './Contact/contact';

const Layout = () => {

  
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  console.log('ACTIVE',activeSection)
  return (
    <div className="layout-container">
      <Header activeSection={activeSection}/>
      <div className="main-content">
        <Home/>
        <About/>
        <Resume/>
        <Portfolio/>
        <Roles/>
        <Contact/>
        <Footer activeSection={activeSection}/>
      </div>
    </div>
  );
};

export default Layout;
