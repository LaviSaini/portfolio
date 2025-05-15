// Portfolio.jsx
import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";
import CountUp from 'react-countup';
import 'glightbox/dist/css/glightbox.min.css';
import portfolio1 from "../../assets/img/portfolio/app-1.jpg";
import portfolio2 from "../../assets/img/portfolio/product-1.jpg";
import portfolio3 from "../../assets/img/portfolio/branding-1.jpg";
import portfolio4 from "../../assets/img/portfolio/books-1.jpg";
import portfolio5 from "../../assets/img/portfolio/app-2.jpg";
import portfolio6 from "../../assets/img/portfolio/app-3.jpg";
import Picture1 from "../../assets/img/portfolio/Picture1.jpg";
import Picture2 from "../../assets/img/portfolio/Picture2.jpg";
import Picture3 from "../../assets/img/portfolio/Picture3.jpg";
import Picture4 from "../../assets/img/portfolio/Picture4.jpg";
import Picture5 from "../../assets/img/portfolio/Picture5.jpg";
import Campus1 from "../../assets/img/portfolio/Campus1.jpg";
import Campus2 from "../../assets/img/portfolio/Campus2.jpg";
import Campus3 from "../../assets/img/portfolio/Campus3.jpg";
import Campus4 from "../../assets/img/portfolio/Campus4.jpg";
import Campus5 from "../../assets/img/portfolio/Campus5.jpg";
import Campus6 from "../../assets/img/portfolio/Campus6.jpg";
import m1 from "../../assets/img/portfolio/m1.jpeg";
import m2 from "../../assets/img/portfolio/m2.jpeg";
import m3 from "../../assets/img/portfolio/m3.jpeg";
import m4 from "../../assets/img/portfolio/m4.jpeg";
import m5 from "../../assets/img/portfolio/m5.jpeg";
import m6 from "../../assets/img/portfolio/m6.jpeg";
import m7 from "../../assets/img/portfolio/m7.jpeg";
import c1 from "../../assets/img/portfolio/c1.jpeg";
import c2 from "../../assets/img/portfolio/c2.jpeg";
import c3 from "../../assets/img/portfolio/c3.jpeg";
import c4 from "../../assets/img/portfolio/c4.jpeg";
import c5 from "../../assets/img/portfolio/c5.jpeg";
import c6 from "../../assets/img/portfolio/c6.jpeg";
import c7 from "../../assets/img/portfolio/c7.jpeg";
import c8 from "../../assets/img/portfolio/c8.jpeg";
import s1 from "../../assets/img/portfolio/s1.jpg";
import s2 from "../../assets/img/portfolio/s2.jpg";
import s3 from "../../assets/img/portfolio/s3.jpg";
import s4 from "../../assets/img/portfolio/s4.jpg";
import s5 from "../../assets/img/portfolio/s5.jpg";
import s6 from "../../assets/img/portfolio/s6.jpg";
import s7 from "../../assets/img/portfolio/s7.jpg";
import s8 from "../../assets/img/portfolio/s8.jpg";


const Portfolio = () => {
    const isotope = useRef(null);
    const [filterKey, setFilterKey] = useState("*");

    const portfolioItems = [
        { id: 1, title: "Picture1", category: "filter-office", img: Picture1 },
        { id: 2, title: "Campus 1", category: "filter-campus", img: Campus1 },
        { id: 3, title: "Picture2", category: "filter-office", img: Picture2 },
        { id: 4, title: "Campus 2", category: "filter-campus", img: Campus2 },
        { id: 5, title: "Picture3", category: "filter-office", img: Picture3 },
        { id: 6, title: "Campus 3", category: "filter-campus", img: Campus3 },
        { id: 7, title: "Picture4", category: "filter-office", img: Picture4 },
        { id: 8, title: "Campus 4", category: "filter-campus", img: Campus4 },
        { id: 9, title: "Picture5", category: "filter-office", img: Picture5 },
        { id: 10, title: "Campus 5", category: "filter-campus", img: Campus5 },
        { id: 11, title: "Campus 6", category: "filter-campus", img: Campus6 },
        { id: 12, title: "Meditation 1", category: "filter-", img: m1 },
        { id: 13, title: "Meditation 2", category: "filter-meditation", img: m2 },
        { id: 14, title: "Meditation 3", category: "filter-meditation", img: m3 },
        { id: 15, title: "Meditation 4", category: "filter-meditation", img: m4 },
        { id: 16, title: "Meditation 5", category: "filter-meditation", img: m5 },
        { id: 17, title: "Meditation 6", category: "filter-meditation", img: m6 },
        { id: 18, title: "Meditation 7", category: "filter-meditation", img: m7 },
        { id: 19, title: "Corporate 1", category: "filter-corporate-yoga", img: c1 },
        { id: 20, title: "Corporate 2", category: "filter-corporate-yoga", img: c2 },
        { id: 21, title: "Corporate 3", category: "filter-corporate-yoga", img: c3 },
        { id: 22, title: "Corporate 4", category: "filter-corporate-yoga", img: c4 },
        { id: 23, title: "Corporate 5", category: "filter-corporate-yoga", img: c5 },
        { id: 24, title: "Corporate 6", category: "filter-corporate-yoga", img: c6 },
        { id: 25, title: "Corporate 7", category: "filter-corporate-yoga", img: c7 },
        { id: 26, title: "Corporate 8", category: "filter-corporate-yoga", img: c8 },
        { id: 27, title: "strength 1", category: "filter-strength-yoga", img: s1 },
        { id: 28, title: "strength 2", category: "filter-strength-yoga", img: s2 },
        { id: 29, title: "strength 3", category: "filter-strength-yoga", img: s3 },
        { id: 30, title: "strength 4", category: "filter-strength-yoga", img: s4 },
        { id: 31, title: "strength 5", category: "filter-strength-yoga", img: s5 },
        { id: 32, title: "strength 6", category: "filter-strength-yoga", img: s6 },
        { id: 33, title: "strength 7", category: "filter-strength-yoga", img: s7 },
        { id: 34, title: "strength 8", category: "filter-strength-yoga", img: s8 },

    ];


    const filters = [
        { key: "*", label: "All" },
        { key: "filter-office", label: "Office" },
        { key: "filter-campus", label: "Campus" },
        { key: "filter-meditation", label: "Meditation" },
        { key: "filter-corporate-yoga", label: "Corporate Yoga" },
        { key: "filter-strength-yoga", label: "Strength Training" }
        // { key: "filter-branding", label: "Branding" },
        // { key: "filter-books", label: "Books" },
    ];

    useEffect(() => {
        isotope.current = new Isotope(".isotope-container", {
            itemSelector: ".isotope-item",
            layoutMode: "masonry",
        });

        return () => {
            if (isotope.current) {
                isotope.current.destroy();
                isotope.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (isotope.current) {
            isotope.current.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` });
        }
    }, [filterKey]);

    useEffect(() => {
        const lightbox = GLightbox({
            selector: '.glightbox'
        });

        // Reinitialize isotope when filter changes
        if (isotope.current) {
            isotope.current.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` });
        }

        return () => {
            lightbox.destroy();
        };
    }, [filterKey]);


    return (
        <section id="portfolio" className="portfolio section light-background">
            <div className="container section-title" style={{paddingBottom:'22px'}} data-aos="fade-up">
                <h2>Portfolio</h2>
                <p>
                    To secure a position as a teacher and utilize my dedication to foster
                    quality education required for a child’s development.
                </p>

            </div>
            <div className="container">
                <h2>What Sets Us Apart</h2>
                <ul className="fst-italic py-3">
                    <li><strong>Wherever</strong> – In the office, in a car, at your desk, in an elevator – your workout moves with you.</li>
                    <li><strong>Whenever</strong> – No need for an hour-long session – even 30 seconds of movement can make a difference.</li>
                    <li><strong>Whatever</strong> – Tap, stretch, press, lift, shake – simple moves for instant relief and energy.</li>
                    <li><strong>However</strong> – Sitting, standing, waiting – our techniques fit into any moment of your day.</li>
                    <li><strong>Wear Ever</strong> – No need for special attire – your business suit, casuals, or even heels work just fine.</li>
                </ul>

            </div>
            <div id="stats" className="stats">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item">
                                <i className="bi bi-emoji-smile"></i>
                                <CountUp start={0} end={10000} duration={1} className="purecounter" />
                                <p><strong>Corporate wellness sessions conducted</strong> <span>transforming workplace health.</span></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item">
                                <i className="bi bi-journal-richtext"></i>
                                <CountUp start={0} end={10} duration={1} className="purecounter" />
                                <p><strong>Tailored programs</strong> <span>designed to meet diverse corporate needs.</span></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item">
                                <i className="bi bi-headset"></i>
                                <CountUp start={0} end={500} duration={1} className="purecounter" />
                                <p><strong>Companies</strong> <span>have trusted us to enhance employee well-being.</span></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item">
                                <i className="bi bi-people"></i>
                                <CountUp start={0} end={100} duration={1} className="purecounter" />
                                <p><strong>Cities covered,</strong> <span>bringing wellness to workplaces across the country.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <h2>Ready to start Corporate Yoga?</h2>
                <p>
                    We provide corporate wellness programs addressing real workplace challenges—from Desk Yoga and Ergonomics to Stress Management and Therapeutic Yoga. Over the years, our approach has helped professionals in leading organizations, proving that even a few minutes of mindful movement can transform health and well-being.
                </p>

                <p >
                    Practices that are designed to accommodate individuals with varying abilities and limitations, making yoga accessible to all, includes chair yoga and desk exercises.
                </p>
                <p >
                    Adaptive Yoga practices modify yoga poses so they can be done while seated in a chair. These modifications make yoga accessible to people who want a quick break from office work.
                </p>
            </div>

            <div className="container">
                <h2>Features</h2>
                <ul style={{listStyle:'none'}}>
                    <li style={{marginBottom:'8px'}}><i class="fa-solid fa-check text-green-600"></i> <strong>Office-friendly:</strong> Sessions can be done in office clothes.</li>
                    <li style={{marginBottom:'8px'}}><i class="fa-solid fa-check text-green-600"></i> <strong>Suitability:</strong> Suitable for people working in the office or sitting in front of the computer for long.</li>
                    <li style={{marginBottom:'8px'}}><i class="fa-solid fa-check text-green-600"></i> <strong>Variety of Practices:</strong> Utilizes a range of yoga styles and adaptations to suit different bodies and abilities.</li>
                    <li style={{marginBottom:'8px'}}><i class="fa-solid fa-check text-green-600"></i> <strong>Improved Accessibility:</strong> Allows individuals with physical challenges or disabilities to experience the benefits of yoga.</li>
                    <li ><i class="fa-solid fa-check text-green-600"></i> <strong>Physical and physiological advantages:</strong> These practices stimulate the nervous and circulatory system, alleviating pain and discomfort while promoting overall well-being.</li>
                </ul>

            </div>


            <div className="container">
            <div className="container section-title" style={{paddingBottom:'12px'}}  data-aos="fade-up">
                <h2 style={{marginBottom:'0px'}}>Where We can be?</h2>
            </div>
                <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                    <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                        {filters.map(filter => (
                            <li
                                key={filter.key}
                                className={filterKey === filter.key ? "filter-active" : ""}
                                onClick={() => setFilterKey(filter.key)}
                            >
                                {filter.label}
                            </li>
                        ))}
                    </ul>

                    <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                        {portfolioItems.map((item) => (

                            <div key={item.id} className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.category}`}>
                                <div className="portfolio-content h-100">
                                    <img src={item.img} className="img-fluid" alt={`Portfolio item: ${item.title}`} />
                                    <div className="portfolio-info">
                                        <h4>{item.title}</h4>
                                        <p>{item.category.replace("filter-", "")}</p>
                                        <a
                                            href={item.img}
                                            title={item.title}
                                            data-gallery={
                                                filterKey === "*"
                                                    ? "portfolio-gallery"
                                                    : `portfolio-gallery-${item.category.replace("filter-", "")}`
                                            }
                                            className="glightbox preview-link"
                                        >
                                            <i className="bi bi-zoom-in"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Portfolio;
