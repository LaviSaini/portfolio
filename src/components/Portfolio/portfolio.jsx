// Portfolio.jsx
import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";
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
    ];
    

    const filters = [
        { key: "*", label: "All" },
        { key: "filter-office", label: "Office" },
        { key: "filter-campus", label: "Campus" },
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
            <div className="container section-title" data-aos="fade-up">
                <h2>Portfolio</h2>
                <p>
                    To secure a position as a teacher and utilize my dedication to foster
                    quality education required for a child’s development.
                </p>
            </div>

            <div className="container">
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
