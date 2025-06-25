'use client';
import { useEffect, useRef } from "react";
import "./Hero.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const bannerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bannerRef.current,
      { scale: 1 },
      {
        scale: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top bottom",     
          end: "top top",          
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Left Project Card */}
        {/* <div className="hero-card">
          <img src="/assets/git.png" alt="GitHub Projects" className="hero-image" />
          <h3 className="hero-title">
            GITHUB REPOS <span className="new-badge">NEW</span>
          </h3>
          <p className="hero-desc">
            Dive into a curated collection of open-source projects and experiments showcasing my development journey across full-stack apps, data tools, and UI experiments.
          </p>
        </div> */}

        {/* Center Feature Text */}
     <div className="hero-center">
        <h2 className="hero-allwork">ABOUT ME</h2>
        <p className="hero-featured">
          <br />
          I'm a final-year B.Tech Computer Science student specializing in Data Science at UPES, Dehradun. Passionate about data-driven problem solving, I work across Python, machine learning, and full-stack web development to build impactful solutions.
        </p>
        <p className="hero-tip"><strong>RESUME!</strong> Download my resume </p>
      </div>
        {/* Right Project Card */}
        {/* <div className="hero-card">
          <img src="/assets/linkedin.png" alt="LinkedIn Portfolio" className="hero-image" />
          <h3 className="hero-title">
            LINKEDIN PROFILE <span className="new-badge">NEW</span>
          </h3>
          <p className="hero-desc">
            Connect with me professionally — explore my experience, achievements, and education as a Data Science student and Web Developer actively building innovative solutions.
          </p>
        </div> */}
      </div>
 

      {/* Miranda Banner */}
      <div className="miranda-banner" ref={bannerRef}>
        <h1 className="text">Advik</h1>
      </div>
    </section>
  );
}
