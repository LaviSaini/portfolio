import React from "react";
import Campus6 from "../../assets/img/portfolio/Campus6.jpg";

const Home = () => {


    return (
        <section id="hero" className="hero section dark-background">

            <img src={Campus6} alt="" data-aos="fade-in" className="" />

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <h2>Nishkarsh  Jangid</h2>
                <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Yoga Instructor</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
            </div>

        </section>
    )
}

export default Home;