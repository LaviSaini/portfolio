import React from "react";

const Roles = () => {
  return (
    <section id="services" className="services section">


      <div className="container section-title" data-aos="fade-up">
        <h2>Roles &amp; Responsibilities</h2>
        <p>"Empowering lives through mindful yoga practices, personalized guidance, and a nurturing environment for holistic well-being."</p>
      </div>

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="icon flex-shrink-0"><i className="fas fa-person-praying"></i> </div>
            <div>
              <h4 className="title">Yoga className Conduction</h4>
              <p className="description">Conducting well-structured yoga classes aligned with studio schedules, ensuring consistency and discipline in practice.</p>
            </div>
          </div>


          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="icon flex-shrink-0"><i className="fas fa-person-rays"></i> </div>
            <div>
              <h4 className="title">Posture Demonstration & Teaching</h4>
              <p className="description">Demonstrating correct yoga postures with clarity and patience, guiding students of all levels towards mastery.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="icon flex-shrink-0"><i className="fas fa-clipboard"></i>
            </div>
            <div>
              <h4 className="title">Clear & Concise Instructions</h4>
              <p className="description">Delivering easy-to-understand instructions, making complex poses accessible and safe for every practitioner</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
            <div className="icon flex-shrink-0"><i className="fas fa-comment"></i>
            </div>
            <div>
              <h4 className="title">Client Guidance & Feedback</h4>
              <p className="description">Offering personalized feedback and hands-on guidance to help clients improve their form, strength, and confidence.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
            <div className="icon flex-shrink-0"><i className="fas fa-shield-alt"></i>
            </div>
            <div>
              <h4 className="title">Safe & Inclusive Environment</h4>
              <p className="description">Creating a welcoming, supportive space where everyone feels encouraged, respected, and motivated to grow.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
            <div className="icon flex-shrink-0"><i className="fas fa-om"></i></div>
            <div>
              <h4 className="title">Breathing & Modifications Expertise</h4>
              <p className="description">Teaching effective breathing techniques and providing posture modifications to suit individual needs and abilities.</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Roles;
