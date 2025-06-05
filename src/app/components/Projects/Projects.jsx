'use client';

import { useEffect, useRef, useState } from 'react';
import './Projects.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
    title: 'Spotify Track Analysis',
    year: '2023',
    isNew: true,
    description:
      'Analyzed Spotify Top 50 tracks using data visualization techniques to compare various factors such as tempo, energy, and danceability.',
    image: '/assets/project2.jpeg',
    tags: ['Data Visualization', 'Jupyter Notebook'],
  },
  {
    title: 'SMS Spam Detection',
    year: '2023',
    isNew: true,
    description:
      'Developed a machine learning model using Python and Streamlit to classify SMS messages as spam or not spam.',
    image: '/assets/project2.jpeg',
    tags: ['Machine Learning', 'Streamlit'],
  },
  {
    title: 'World Cup Prediction',
    year: '2023',
    isNew: true,
    description:
      'Predicted FIFA World Cup outcomes by analyzing historical goal data scraped from Wikipedia using Beautiful Soup.',
    image: '/assets/project2.jpeg',
    tags: ['Data Analysis', 'Web Scraping'],
  },
  {
    title: 'Data Structures & Algorithms',
    year: '2023',
    isNew: true,
    description:
      'Implemented various data structures and algorithms in C to understand fundamental programming concepts.',
    image: '/assets/project2.jpeg',
    tags: ['C Programming', 'Algorithms'],
  },
  {
    title: 'Desktop Assistant',
    year: '2023',
    isNew: true,
    description:
      'Created a personal desktop assistant using OpenAI API for real-time interactivity, built with Python.',
    image: '/assets/project2.jpeg',
    tags: ['Python', 'OpenAI API'],
  },
  {
    title: 'Login & Register Page',
    year: '2023',
    isNew: true,
    description:
      'Developed a secure login and registration page using Node.js and MongoDB for user authentication.',
    image: '/assets/project2.jpeg',
    tags: ['Node.js', 'MongoDB'],
  },
  {
    title: '21 Days of Code - 2024',
    year: '2024',
    isNew: true,
    description:
      'Participated in a coding challenge focusing on Java, contributing solutions to various problems over 21 days.',
    image: '/assets/project2.jpeg',
    tags: ['Java', 'Coding Challenge'],
  },
];

export default function HorizontalSlider() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const totalWidth = containerRef.current.scrollWidth || 3000;

      gsap.to(containerRef.current, {
        x: () => -(totalWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="slider-section" ref={sectionRef}>
      <div className="slider-container" ref={containerRef}>
        <div className="slider-tab featured-card">
          <div className="featured-labels">
            <h1 className="featured-heading">FEATURED</h1>
            <div className="featured-subblock">
              <h1 className="featured-heading">PROJECTS</h1>
            </div>
          </div>

          <p className="featured-description">
            <span className="dropcap">All</span>an artisan, I like to start from raw matter and give life to an iconic product that makes your brand stand out — starting from a Visual Strategy that guides the client’s vision to reality.
          </p>
        </div>

        {projects.map((project, index) => (
          <div
            key={index}
            className={`slider-tab ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
<div className="slider-title">
  <h3 className="project-title">{project.title}</h3>
  <div className="project-meta">
    {project.isNew && <span className="slider-badge">NEW</span>}
    <p className="slider-year">{project.year}</p>
  </div>
</div>


            {activeIndex === index && (
              <div className="slider-detail">
                <div className="slider-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="slider-img"
                  />
                )}
              </div>
            )}
            
          </div>
          
        ))}
      </div>
    </section>
  );
}
