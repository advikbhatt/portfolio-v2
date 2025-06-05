// About.jsx
"use client";
import React from "react";
import "./About.css";

const images = [
  "/assets/project1.webp",
  "/assets/project2.jpeg",
];
const About = () => {
    return (
        <section className="about-wrapper">
            <div className="miranda-banner">
                <h1 className="miranda-text">ABOUT ME</h1>
            </div>
            {/* Clients & Partners section */}
            <div className="clients-block">
                <p className="clients-text">
                    Over the past 2+ years, I collaborated with educational and social
                    impact organizations such as
                    <span className="highlight"> BHOMYA </span>,
                    <span className="highlight"> INNODATA </span>,
                    <span className="highlight"> CODSOFT </span>
                    and more.
                </p>
            </div>

            {/* Work Experience section */}
            <div className="experience-grid">
                <div className="exp-card">
                    <h3>Looking for new opportunities!</h3>
                    <p className="exp-time">Available from June 2025</p>
                    <p>
                        Whether you're looking for a passionate full-stack developer,
                        someone to work on an AI/data project, or need a freelancer for
                        product-based development, feel free to reach out
                        <a href="#contact"> here</a>.
                    </p>
                </div>

                <div className="exp-card">
                    <h3>Freelance & Internships</h3>
                    <p className="exp-time">from 2022–2025</p>
                    <p className="tags">
                        <span className="highlight">FULL-STACK</span>,
                        <span className="highlight">DATA SCIENCE</span>,
                        <span className="highlight">UI/UX DESIGN</span>,
                        <span className="highlight">POWER BI</span>,
                        <span className="highlight">REACT</span>
                    </p>
                </div>
                <div className="exp-card">
                    <h3>Looking for new opportunities!</h3>
                    <p className="exp-time">Available from June 2025</p>
                    <p>
                        Whether you're looking for a passionate full-stack developer,
                        someone to work on an AI/data project, or need a freelancer for
                        product-based development, feel free to reach out
                        <a href="#contact"> here</a>.
                    </p>
                </div>
                <div className="exp-card">
                    <h3>Freelance & Internships</h3>
                    <p className="exp-time">from 2022–2025</p>
                    <p className="tags">
                        <span className="highlight">FULL-STACK</span>,
                        <span className="highlight">DATA SCIENCE</span>,
                        <span className="highlight">UI/UX DESIGN</span>,
                        <span className="highlight">POWER BI</span>,
                        <span className="highlight">REACT</span>
                    </p>
                </div>
            </div>
            <section className="image-grid-section">
      <div className="image-grid">
        {images.map((src, index) => (
          <div className="image-frame">
  <img src={src} alt={`Artwork ${index + 1}`} className="gallery-img" />
</div>

        ))}
      </div>
    </section>
        </section>
    );
};

export default About;
