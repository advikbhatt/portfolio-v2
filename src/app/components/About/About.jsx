// About.jsx
"use client";
import React from "react";
import "./About.css";

const About = () => {
    return (
        <section className="about-wrapper">
            {/* Banner Heading */}
            <div className="miranda-banner">
                <h1 className="miranda-text">EXPERIENCE</h1>
            </div>

            {/* Clients & Collaborations */}
            <div className="clients-block">
                <p className="clients-text">
                    Over the past 2+ years, I’ve worked with impactful organizations like
                    <span className="highlight"> BHOMYA</span>,
                    <span className="highlight"> INNODATA</span>,
                    <span className="highlight"> CODSOFT</span>,
                    contributing to digital solutions, research, and social-tech development.
                </p>
            </div>

            {/* Experience Summary */}
            <div className="experience-grid">
                {/* 1. Technical Intern – Bhomya Foundation */}
                <div className="exp-card structured-card">
                    <div className="card-header">
                        <h3 className="card-title">Technical Intern — Bhomya Foundation (NGO)</h3>
                        <div className="card-meta">
                            <p className="exp-time">Apr 2025 – Jun 2025</p>
                            <p className="exp-time">Dehradun, India</p>
                        </div>
                    </div>

                    <p className="card-description">
                        Designed and developed the NGO’s official website using React.js, incorporating animated components, team & gallery sections, and donation support. Analyzed event participation and outreach metrics with Python and visualization tools to enhance engagement strategy.
                    </p>

                    <div className="tags">
                        <span className="highlight">React.js</span>
                        <span className="highlight">Framer Motion</span>
                        <span className="highlight">Web Design</span>
                        <span className="highlight">Data Analysis</span>
                        <span className="highlight">Python</span>
                    </div>

                    <div className="links-row">
                        <a href="/assets/Bhomya_Certificate.pdf" target="_blank" rel="noopener noreferrer" className="highlight-link">View Certificate ↗</a>
                        <a href="https://www.bhomya.org" target="_blank" rel="noopener noreferrer" className="highlight-link">Website ↗</a>
                    </div>
                </div>

                {/* 2. Developer Intern – Enigma Tech Solution */}
                <div className="exp-card structured-card">
                    <div className="card-header">
                        <h3 className="card-title">Developer Intern — Enigma Tech Solution</h3>
                        <div className="card-meta">
                            <p className="exp-time">Jan 2024 – Apr 2024</p>
                            <p className="exp-time">Noida, Uttar Pradesh</p>
                        </div>
                    </div>

                    <p className="card-description">
                        Worked on full-stack modules including React-based frontend, Node.js backend integration, and MongoDB-powered APIs. Delivered Power BI dashboards and contributed to UI/UX improvements for client applications.
                    </p>

                    <div className="tags">
                        <span className="highlight">React.js</span>
                        <span className="highlight">Node.js</span>
                        <span className="highlight">MongoDB</span>
                        <span className="highlight">Power BI</span>
                        <span className="highlight">UI/UX</span>
                    </div>

                    <div className="links-row">
                        <a href="/assets/Enigma_Certificate.pdf" target="_blank" rel="noopener noreferrer" className="highlight-link">View Certificate ↗</a>
                        <a href="https://www.enigmatechsolutions.com/" target="_blank" rel="noopener noreferrer" className="highlight-link">Website ↗</a>
                    </div>
                </div>

                {/* 3. Research Intern – Kuno National Park */}
                <div className="exp-card structured-card">
                    <div className="card-header">
                        <h3 className="card-title">Research Intern — Kuno National Park</h3>
                        <div className="card-meta">
                            <p className="exp-time">Dec 2023 – Jan 2024</p>
                            <p className="exp-time">Madhya Pradesh, India</p>
                        </div>
                    </div>

                    <p className="card-description">
                        Contributed to Project Cheetah under MP Forest Dept. Conducted field-level biodiversity surveys, ecological data collection using MBTiles, and GIS mapping via MSTRIPES. Learned species tracking and spatial analysis in a conservation ecosystem.
                    </p>

                    <div className="tags">
                        <span className="highlight">Ecological Survey</span>
                        <span className="highlight">GIS Mapping</span>
                        <span className="highlight">MSTRIPES</span>
                        <span className="highlight">MBTiles</span>
                        <span className="highlight">Field Research</span>
                    </div>

                    <div className="links-row">
                        <a href="/assets/Kuno_Certificate.pdf" target="_blank" rel="noopener noreferrer" className="highlight-link">View Certificate ↗</a>
                        <a href="https://www.mponline.gov.in/portal/services/forest/kuno.aspx" target="_blank" rel="noopener noreferrer" className="highlight-link">Forest Portal ↗</a>
                    </div>
                </div>

                {/* 4. Social Intern – Unforgotten Humanity Foundation */}
                <div className="exp-card structured-card">
                    <div className="card-header">
                        <h3 className="card-title">Social Intern — Unforgotten Humanity Foundation</h3>
                        <div className="card-meta">
                            <p className="exp-time">May 2023 – Jul 2023</p>
                            <p className="exp-time">Dehradun, Uttarakhand</p>
                        </div>
                    </div>

                    <p className="card-description">
                        Organized creative learning sessions like dance and music for underprivileged children. Coordinated outreach campaigns and helped secure sponsorships for local education and community events.
                    </p>

                    <div className="tags">
                        <span className="highlight">Community Outreach</span>
                        <span className="highlight">Social Welfare</span>
                        <span className="highlight">Youth Engagement</span>
                        <span className="highlight">Event Planning</span>
                    </div>

                    <div className="links-row">
                        <a href="/assets/UHF_Certificate.pdf" target="_blank" rel="noopener noreferrer" className="highlight-link">View Certificate ↗</a>
                        <a href="https://www.instagram.com/unforgottenhumanity/" target="_blank" rel="noopener noreferrer" className="highlight-link">Instagram ↗</a>
                    </div>
                </div>

            </div>

            
        </section>
    );
};

export default About;
