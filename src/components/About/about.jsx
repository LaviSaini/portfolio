import React from "react";
import MyImage from '../../assets/img/NJ2.jpg'

const About = () => {


    return (
        <section id="about" className="about section">

            <div className="container section-title" data-aos="fade-up">
                <h2>About</h2>
                <p>My name is Nishkarsh Jangid, and I am a passionate Yoga Instructor dedicated to inspiring transformation through the ancient wisdom of yoga.
                    For me, yoga is not just a physical practice — it is a path to self-discovery, inner peace, and true strength.
                    Through mindful movement, conscious breathing, and meditation, I help individuals tap into their highest potential, both physically and spiritually.</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row gy-4 justify-content-center">
                    <div className="col-lg-4 aboutImg">
                        <img src={MyImage} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 content">
                        <h2>YOGA Instructor.</h2>
                        <p className="fst-italic py-3">
                            Whether you're stepping onto the mat for the first time or deepening an existing practice, I am here to guide you with compassion, patience, and unwavering support.
                            My mission is to create a space where every person feels empowered to explore their body, calm their mind, and nourish their soul.
                            Yoga has transformed my life in ways words cannot fully capture, and it’s my deepest joy to share this journey with others.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>22 Feb 2000</span></li>
                                    {/* <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li> */}
                                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span><a href="tel:+917827865868" className="linksCOlor">+91 7827865868</a></span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Address:</strong> <span>Meet nagar, East gokulpur, Delhi-110094 </span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>27</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span><a href="mailto:nishkarshjangid64278@gmail.com" className="linksCOlor">nishkarshjangid64278@gmail.com</a></span></li>
                                    {/* <li><i className="bi bi-chevron-right"></i> <strong>Social Media:</strong><a href="https://www.instagram.com/yogacoach_nishkarsh?igsh=MTkxaTNlbTRtZDQzMA%3D%3D&utm_source=qr" target="_blank" className="linksCOlor">insta-@yogacoach_nishkarsh </a></li> */}
                                </ul>
                            </div>
                        </div>
                        <p className="py-3">
                            Together, let's embrace balance, cultivate resilience, and awaken the limitless possibilities within.
                            Your journey to greater harmony, strength, and awareness starts here — and I am honored to walk this path with you.
                        </p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default About;