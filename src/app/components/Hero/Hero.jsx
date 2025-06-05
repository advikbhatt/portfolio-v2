// File: src/app/components/hero/Hero.jsx
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Left Project Card */}
        <div className="hero-card">
          <img src="/assets/git.png" alt="GitHub Projects" className="hero-image" />
          <h3 className="hero-title">
            GITHUB REPOS <span className="new-badge">NEW</span>
          </h3>
          <p className="hero-desc">
            Dive into a curated collection of open-source projects and experiments showcasing my development journey across full-stack apps, data tools, and UI experiments.
          </p>
        </div>

        {/* Center Feature Text */}
        <div className="hero-center">
          <h2 className="hero-allwork">ALL WORK!</h2>
          <p className="hero-featured">
            A Featured selection<br />
            of recent projects, experiments, and collaborations —<br />
            from React frontends to data visualizations and creative dev builds.
          </p>
          <p className="hero-tip"><strong>TIP!</strong> Drag sideways to navigate</p>
        </div>

        {/* Right Project Card */}
        <div className="hero-card">
          <img src="/assets/linkedin.png" alt="LinkedIn Portfolio" className="hero-image" />
          <h3 className="hero-title">
            LINKEDIN PROFILE <span className="new-badge">NEW</span>
          </h3>
          <p className="hero-desc">
            Connect with me professionally — explore my experience, achievements, and education as a Data Science student and Web Developer actively building innovative solutions.
          </p>
        </div>
      </div>

      {/* Miranda Banner */}
      <div className="miranda-banner">
        <h1 className="miranda-text">ADVIK BHATT</h1>
      </div>
    </section>
  );
}
