'use client';

import { useEffect, useRef, useState } from 'react';
import './Projects.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'PROJECTS',
    year: '2022-2026',
    isNew: true,
    description:
      'A collection of my projects showcasing my skills in data science, machine learning, and full-stack development. I have worked on various projects that involve data analysis, web development, and machine learning applications.',
    image: '/assets/project.jpeg',
    hoverImage: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg',
    tags: ['Computer Science', 'Projects'],
  },
  {
    title: 'DataWiz',
    year: '2025',
    isNew: true,
    description:
      'A Streamlit-based data explorer that supports CSV/XLSX uploads, interactive visualizations, ML model integration, and a chatbot for smart analytics.',
    image: '/assets/datawiz.png',
    hoverImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    tags: ['Python', 'Pandas', 'Streamlit', 'ML', 'Chatbot'],
    live: 'https://datawiz.streamlit.app/',
  },
  {
    title: 'Bhomya Foundation Website',
    year: '2025',
    isNew: true,
    description:
      'Developed the official NGO website using React with custom animations, donation integration, team and gallery pages for social outreach.',
    image: '/assets/bhomya.png',
    hoverImage: 'https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg',
    tags: ['React.js', 'CSS Animations', 'NGO Website', 'Frontend'],
    live: 'https://bhomya.org',
  },
  {
    title: 'MHV Education Website',
    year: '2024',
    isNew: true,
    description:
      'Built a responsive educational institute site with detailed course sections, contact forms, and multi-page navigation using HTML, CSS, JS.',
    image: '/assets/mhv.png',
    hoverImage: 'https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg',
    tags: ['HTML', 'CSS', 'JS', 'Responsive Web', 'Education'],
    live: 'https://mhveducation.com/',
  },
  {
    title: 'SMS Spam Detection',
    year: '2023',
    isNew: true,
    description:
      'Built a machine learning model using Python and Streamlit to classify SMS messages as spam or ham, using NLP and scikit-learn.',
    image: '/assets/sms.jpeg',
    hoverImage: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg',
    tags: ['Machine Learning', 'Streamlit', 'NLP', 'scikit-learn'],
  },
  {
    title: 'World Cup Prediction',
    year: '2023',
    isNew: true,
    description:
      'Predicted FIFA World Cup outcomes by scraping 20+ years of match data from Wikipedia using BeautifulSoup and analyzing goal patterns.',
    image: '/assets/worldcup.jpeg',
    hoverImage: 'https://images.pexels.com/photos/2299544/pexels-photo-2299544.jpeg',
    tags: ['Data Analysis', 'Web Scraping', 'Python', 'BeautifulSoup'],
    live: 'https://github.com/advikbhatt/World_cup_Predection',
  },
  {
    title: 'Data Structures & Algorithms',
    year: '2023',
    isNew: true,
    description:
      'Implemented core DSA topics in C including stacks, queues, trees, sorting, and searching — solidifying algorithmic problem-solving skills.',
    image: '/assets/dsa.jpeg',
    hoverImage: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    tags: ['C', 'DSA', 'Algorithms', 'Competitive Programming'],
    live: 'https://github.com/advikbhatt/Data-Structures-Algorithm',
  },
  {
    title: 'Desktop Assistant (AI)',
    year: '2023',
    isNew: true,
    description:
      'Created an AI desktop assistant using Python and OpenAI APIs for task automation and voice-based interactions.',
    image: '/assets/ai.jpeg',
    hoverImage: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg',
    tags: ['Python', 'OpenAI', 'Automation', 'Voice Assistant'],
    live: 'https://github.com/advikbhatt/Desktop-Assistant',
  },
  {
    title: 'Login & Register Page',
    year: '2023',
    isNew: true,
    description:
      'Built an authentication system using Node.js and MongoDB featuring password hashing, form validation, and session management.',
    image: '/assets/project2.jpeg',
    hoverImage: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg',
    tags: ['Node.js', 'MongoDB', 'Authentication', 'Backend'],
    live: 'https://github.com/advikbhatt/login_register_page',
  },
  {
    title: '21 Days of Code - 2024',
    year: '2024',
    isNew: true,
    description:
      'Completed a 21-day Java coding challenge with daily problem-solving using OOP, arrays, recursion, and file handling.',
    image: '/assets/code.png',
    hoverImage: 'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg',
    tags: ['Java', 'DSA Practice', 'OOP', 'Challenges'],
    live: 'https://github.com/advikbhatt/21DaysofCode_Java',
  },
];


export default function HorizontalSlider() {
  useEffect(() => {
  projects.forEach((project) => {
    if (project.hoverImage) {
      const img = new Image();
      img.src = project.hoverImage;
    }
  });
}, []);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = containerRef.current.scrollWidth;

      // Horizontal Scroll
      gsap.to(containerRef.current, {
        x: () => -(totalWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Featured card fade-in
      gsap.from('.featured-card', {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.featured-card',
          start: 'top 90%',
        },
      });

      // Project cards animation
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 95%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="slider-section" ref={sectionRef}>
      <div className="slider-container" ref={containerRef}>
        {/* Featured Intro Card */}
        <div className="slider-tab featured-card">
          <div className="featured-labels">
            <div className="featured-subblock">
              <h1 className="featured-heading">ABOUT ME</h1>
            </div>
          </div>
          <p className="featured-description">
            <span className="dropcap">A</span> Computer Science student at University of Petroleum and Energy Studies (2022–2026),<br />
            I blend data science, machine learning, full-stack development, and strong foundations in data structures & algorithms to create meaningful, tech-forward solutions — from analytical dashboards to intuitive web platforms, always driven by precision and purpose.
            <br /><br />
            Strong grasp of Data Structures and Algorithms, with hands-on problem-solving across platforms like LeetCode.
            I enjoy optimizing logic, writing efficient code, and building a solid foundation for scalable systems.
          </p>
        </div>

        {/* Project Cards */}
        {projects.map((project, index) => (
          <div
            key={index}
            className={`slider-tab aquerone-style ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            ref={(el) => (cardsRef.current[index] = el)}
            style={
              activeIndex !== index && project.hoverImage
                ? { '--bg-image': `url(${project.hoverImage})` }
                : {}
            }
          >
            {/* Left Spine */}
            <div className="spine-left">
              {project.title}
              <br />
              <span>{project.year}</span>
            </div>

            {/* Center Content */}
            <div className="aquerone-main">
              <div className="aquerone-tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <h1 className="aquerone-title">{project.title}</h1>
              <p className="aquerone-desc">{project.description}</p>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-live-link"
                >
                  View Live Project ↗
                </a>
              )}

              <div className="aquerone-img-wrap">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
