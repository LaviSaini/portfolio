import React from "react";

const Skill = () => {
  return (
    <section id="myresume" className="skills section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>"Healing minds and bodies through Mudras, movement, and mindful communication."</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation">
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill"><span>Posture & Injury Expert</span> <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: '100%' }} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill"><span>Holistic Disease Recovery</span> <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: '100%' }} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill"><span>Healing through Mudras</span> <i className="val">95%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: '95%' }} role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="progress">
              <span className="skill"><span>Positive & Goal-Oriented</span> <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: '100%' }} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill"><span>Strong Interpersonal Skills</span> <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: '85%' }} role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill"><span>Self-Motivated & Focused</span> <i className="val">95%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: '95%' }} role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
