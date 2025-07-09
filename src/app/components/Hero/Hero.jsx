'use client';
import './Hero.css';
import { useEffect, useRef, useState } from 'react';
import { TbMail, TbBrandLinkedin, TbBrandGithub, TbDownload, TbBrandLeetcode } from 'react-icons/tb';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const imageRef = useRef(null);
  const nameScrollRef = useRef(null);
  const locationRef = useRef();
  const toggleRef = useRef(null);
  const [theme, setTheme] = useState('light');

  // Scramble Effect
  useEffect(() => {
    const letters = "ALHDSlksandbaaspioufgkanwreiafodsuvkhlkasposdifk";
    const originalText = "Dehradun";
    const altText = "Uttarakhand";
    let interval = null;

    const scramble = (targetText) => {
      let iteration = 0;
      clearInterval(interval);

      interval = setInterval(() => {
        const scrambled = targetText
          .split("")
          .map(() => letters[Math.floor(Math.random() * 26)])
          .join("");

        locationRef.current.innerText = scrambled;
        iteration++;

        if (iteration > 5) {
          clearInterval(interval);
          locationRef.current.innerText = targetText;
        }
      }, 50);
    };

    const el = locationRef.current;
    const enter = () => scramble(altText);
    const leave = () => scramble(originalText);

    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);

    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  // Parallax and Scroll Effects
  useEffect(() => {
    gsap.to(imageRef.current, {
      y: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to(nameScrollRef.current, {
      xPercent: 50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top bottom',
        end: '+=800',
        scrub: true,
      },
    });
  }, []);

  // Theme Toggle Handler
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);

    // Animate toggle
    gsap.fromTo(toggleRef.current, 
      { rotate: 0, scale: 0.8 },
      { rotate: 360, scale: 1, duration: 0.6, ease: 'power3.out' }
    );
  };

  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="hero-image-wrapper">
        <img ref={imageRef} src="assets/hero.png" alt="Advik Bhatt" className="hero-image" />
      </div>

      {/* Navbar */}
      <header className="hero-navbar">
        <div className="hero-navbar-left">
          <div ref={locationRef}>Dehradun</div>

          {/* Theme Toggle */}
          <button
            ref={toggleRef}
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <BsMoonStarsFill /> : <BsSunFill />}
          </button>
        </div>

        <nav className="hero-navbar-right">
          <a href="mailto:advikbhatt24@gmail.com"><TbMail /></a>
          <a href="https://www.linkedin.com/in/advikbhatt/"><TbBrandLinkedin /></a>
          <a href="https://github.com/advikbhatt"><TbBrandGithub /></a>
          <a href="https://leetcode.com/advik_bhatt"><TbBrandLeetcode /></a>
        </nav>
      </header>

      {/* Right-Aligned Text */}
      <div className="hero-text">
        <span className="hero-role">Freelancing and Development</span>
        <h2 className="hero-job">Data Science Student</h2>

        <a href='assets/advik_resume.pdf' target="_blank" rel="noopener noreferrer">
          <div className="hero-location-badge">
            <div className="hero-location-text">
              <span>Download Resume</span>
            </div>
            <div className="hero-location-icon">
              <TbDownload />
            </div>
          </div>
        </a>
      </div>

      {/* Scrolling Name Text */}
      <div className="hero-name-scroll">
        <div className="scrolling-text" ref={nameScrollRef}>
          <span>Advik Bhatt — </span>
          <span>Advik Bhatt — </span>
          <span>Advik Bhatt — </span>
          <span>Advik Bhatt — </span>
        </div>
      </div>
    </section>
  );
}
