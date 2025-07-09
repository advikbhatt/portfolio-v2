"use client";
import React, { useEffect, useRef } from "react";
import "./About.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const headingRef = useRef(null);
    const textRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        // Heading Animation
        gsap.from(headingRef.current, {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: headingRef.current,
                start: "top 90%",
            },
        });

        // Text Animation
        gsap.from(textRef.current, {
            y: 40,
            opacity: 0,
            duration: 1,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 90%",
            },
        });

        // Cards Animation
        gsap.from(cardsRef.current, {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".experience-grid",
                start: "top 80%",
            },
        });
    }, []);

    return (
        <section className="about-wrapper">
            {/* Banner Heading */}
            <div className="miranda-banner" ref={headingRef}>
                <h1 className="miranda-text">EXPERIENCE</h1>
            </div>

            {/* Clients & Collaborations */}
            <div className="clients-block" ref={textRef}>
                <p className="clients-text">
                    Over the past 2+ years, I’ve worked with impactful organizations like
                    <span className="highlight"> BHOMYA</span>,
                    <span className="highlight"> ENIGMA</span>,
                    <span className="highlight"> WILDLIFE INSTITUTE INDIA</span>,
                    contributing to digital solutions, research, and social-tech development.
                </p>
            </div>

            {/* Experience Summary */}
            <div className="experience-grid">
                {/* 1. Technical Intern – Bhomya Foundation */}
                <div className="exp-card structured-card" ref={el => cardsRef.current[0] = el}>
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
                        <a href="https://media.licdn.com/dms/image/v2/D5622AQG7UG-dGZVcvw/feedshare-shrink_2048_1536/B56Ze8fgdyH8Ao-/0/1751214067473?e=1754524800&v=beta&t=xtW4COgqGb_0TjyjExtwWrEpLy3pprlSKZYbFLgv_0w" target="_blank" rel="noopener noreferrer" className="highlight-link">View Certificate ↗</a>
                        <a href="https://www.bhomya.org" target="_blank" rel="noopener noreferrer" className="highlight-link">Website ↗</a>
                    </div>
                </div>

                {/* 2. Developer Intern – Enigma Tech Solution */}
                <div className="exp-card structured-card" ref={el => cardsRef.current[1] = el}>
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
                        <a href="https://www.linkedin.com/in/advikbhatt/details/certifications/1720236349921/single-media-viewer/?profileId=ACoAADchIr8BFaXSqrNcaStxboA7WnmnsvgNeNI" target="_blank" rel="noopener noreferrer" className="highlight-link">View Certificate ↗</a>
                        <a href="https://www.enigmatechsolutions.com/" target="_blank" rel="noopener noreferrer" className="highlight-link">Website ↗</a>
                    </div>
                </div>

                {/* 3. Research Intern – Kuno National Park */}
                <div className="exp-card structured-card" ref={el => cardsRef.current[2] = el}>
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
                        <a href="https://www.linkedin.com/in/advikbhatt/overlay/1748096422058/single-media-viewer/?profileId=ACoAADchIr8BFaXSqrNcaStxboA7WnmnsvgNeNI" target="_blank" rel="noopener noreferrer" className="highlight-link">View Certificate ↗</a>
                        <a href="https://wii.gov.in/" target="_blank" rel="noopener noreferrer" className="highlight-link">WII ↗</a>
                    </div>
                </div>

                {/* 4. Social Intern – Unforgotten Humanity Foundation */}
                <div className="exp-card structured-card" ref={el => cardsRef.current[3] = el}>
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
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7091827728139661312/" target="_blank" rel="noopener noreferrer" className="highlight-link">View Certificate ↗</a>
                        <a href="https://www.instagram.com/u_h_foundation/" target="_blank" rel="noopener noreferrer" className="highlight-link">Instagram ↗</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
