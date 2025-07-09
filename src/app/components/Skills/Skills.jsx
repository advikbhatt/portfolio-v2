'use client';
import './Skills.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { title: 'Python & Pandas', category: 'Data Analysis', number: 1, icon: '🐍' },
  { title: 'NumPy & Matplotlib', category: 'Scientific Computing', number: 2, icon: '📊' },
  { title: 'Scikit-learn', category: 'Machine Learning', number: 3, icon: '🤖' },
  { title: 'Streamlit', category: 'ML Deployment', number: 4, icon: '⚡' },
  { title: 'Power BI', category: 'Data Visualization', number: 5, icon: '📈' },
  { title: 'Web Scraping (BS4, Requests)', category: 'Data Collection', number: 6, icon: '🌐' },
  { title: 'EDA & Feature Engineering', category: 'Data Preprocessing', number: 7, icon: '🧹' },
  { title: 'Jupyter Notebook', category: 'Interactive Computing', number: 8, icon: '📓' },
  { title: 'SQL', category: 'Databases', number: 9, icon: '🗄️' },
  { title: 'Git & GitHub', category: 'Version Control', number: 10, icon: '🔧' },
];

export default function Skills() {
  const titleRef = useRef(null);
  const dividerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 90%',
      },
    });

    gsap.from(dividerRef.current, {
      opacity: 0,
      scaleX: 0,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: dividerRef.current,
        start: 'top 90%',
      },
    });

    gsap.from(cardRefs.current, {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.aboutskills-grid',
        start: 'top 85%',
      },
    });
  }, []);

  return (
    <section className="aboutskills-section">
      <div className="aboutskills-header" ref={titleRef}>
        <h1 className="aboutskills-title">SKILLS</h1>
      </div>
      <hr className="aboutskills-divider" ref={dividerRef} />

      <div className="aboutskills-grid">
        {skills.map((item, index) => (
          <div
            key={item.number}
            className="aboutskills-card"
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <span className="aboutskills-number">({item.number})</span>
            <div className="aboutskills-info">
              <p className="aboutskills-meta">
                {item.category} <span className="aboutskills-icon">{item.icon}</span>
              </p>
              <h3 className="aboutskills-entry">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
