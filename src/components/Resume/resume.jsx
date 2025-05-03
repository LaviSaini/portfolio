import React from "react";
import Skill from "../Skills/skills";

const Resume = () => {
    return (
        <>
            <Skill />
            <section id="myresume" className="resume section">

                <div className="container section-title" data-aos="fade-up">
                    <h2>Resume</h2>
                    <p>"Seeking a teaching position where I can apply my passion, skills, and dedication to nurture children's growth, inspire learning, and foster holistic development."</p>
                </div>

                <div className="container">

                    <div className="row">

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="resume-title">Sumary</h3>

                            <div className="resume-item pb-0">
                                <h4>Nishkarsh Jangid</h4>
                                <p><em>Blending ancient yogic wisdom with modern healing, I’m Nishkarsh Jangid — guiding minds and bodies toward balance, one breath at a time.</em></p>
                                <ul>
                                    <li>Meet nagar, East gokulpur, Delhi-110094</li>
                                    <li>+91 7827865868</li>
                                    <li>nishkarshjangid64278@gmail.com</li>
                                </ul>
                            </div>

                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>B.P.E.S (yoga) </h4>
                                <h5>Passing year - 2019</h5>
                                <p><em>Swami Vivekanand
                                    Subharti University,
                                    Merrut</em></p>
                                {/* <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p> */}
                            </div>

                            <div className="resume-item">
                                <h4>B.P.E.D (yoga) </h4>
                                <h5>Passing year - 2024</h5>
                                <p><em>Swami Vivekanand
                                    Subharti University,
                                    Merrut</em></p>
                            </div>

                            <div className="resume-item">
                                <h4>6 month Advance yoga </h4>
                                <h5>Dec 2024 </h5>
                                <p><em> Vyas Yoga Center </em></p>
                            </div>

                            <div className="resume-item">
                                <h4>TTC 200Hour</h4>
                                <h5>Nov 2020</h5>
                                <p><em>The Shashank Yoga</em></p>
                            </div>

                            <div className="resume-item">
                                <h4>Diploma in yoga</h4>
                                <h5>October 2022</h5>
                                <p><em>D.P.S.R</em></p>
                            </div>

                            <div className="resume-item">
                                <h4>M.A yoga</h4>
                                <h5>Persuing</h5>
                                <p><em>Uttarakhand Sanskrit
                                    University</em></p>
                            </div>

                        </div>

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item">
                                <h4>Working with Shresth Bharat News Channel (FIT PROGRAM)</h4>
                                <ul>
                                    <li>Featured as a yoga expert on national media promoting health and wellness.</li>
                                    <li>Delivered live sessions and fitness tips to a wide audience.</li>
                                    <li>Built public trust through engaging, knowledgeable presentation and practical yoga advice.</li>
                                    <li>Played a key role in spreading yoga awareness across diverse age groups.</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <h4>7.5 Years Experience as a Personal Trainer</h4>
                                <ul>
                                    <li>Extensive hands-on experience designing personalized fitness and wellness programs.</li>
                                    <li>Deep understanding of body mechanics, posture correction, and injury prevention.</li>
                                    <li>Helped clients achieve long-term health goals through consistent guidance and motivation.</li>
                                    <li>Developed strong one-on-one client relationships focused on trust, progress, and results.</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <h4>1 Year Experience in Online Classes</h4>
                                <ul>
                                    <li>Conducted live virtual sessions with clients across the country.</li>
                                    <li>Adapted teaching style to online platforms while ensuring clear communication and posture visibility.</li>
                                    <li>Created a flexible learning environment with recorded content, live feedback, and Q&A support.</li>
                                    <li>Used tools like Zoom and Google Meet effectively for professional, seamless sessions.</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <h4>2 Years Conducting Corporate Yoga Sessions</h4>
                                <ul>
                                    <li>Successfully delivered customized yoga programs to various corporate clients.</li>
                                    <li>Focused on stress relief, posture correction, and mental wellness for working professionals.</li>
                                    <li>Boosted employee productivity and morale through regular sessions and workshops.</li>
                                    <li>Built lasting collaborations with HR and wellness teams for long-term programs.</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <h4>4-Month Workshop at JMC College</h4>
                                <ul>
                                    <li>Conducted a structured workshop series for students and faculty.</li>
                                    <li>Covered essential topics: yoga basics, stress management, breathing practices, and daily routines.</li>
                                    <li>Received excellent feedback for interactive sessions and practical learning approach.</li>
                                    <li>Inspired youth to embrace yoga as a lifestyle choice, not just a fitness tool.</li>
                                </ul>
                            </div>


                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Resume;