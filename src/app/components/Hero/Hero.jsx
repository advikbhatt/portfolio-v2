// File: src/app/components/hero/Hero.jsx
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Left Project Card */}
        <div className="hero-card">
          <img src="/assets/project1.webp" alt="Project 1" className="hero-image" />
          <h3 className="hero-title">AVRO | KO <span className="new-badge">NEW</span></h3>
          <p className="hero-desc">
            AvroKO is an award-winning global lorem23design firm, established itself as a global leader in interior architecture for hospitality, restaurant and bars.
          </p>
        </div>

        {/* Center Feature Text */}
        <div className="hero-center">
          <h2 className="hero-allwork">ALL WORK!</h2>
          <p className="hero-featured">
            A Featured selection<br />
            the latest wlorem10 loremorloremjkashdflahslaskdfaskjdfhlask —<br />
            of the lheast years. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, obcaecati?
          </p>
          <p className="hero-tip"><strong>TIP!</strong> Drag sideways to navigate</p>
        </div>

        {/* Right Project Card */}
        <div className="hero-card">
          <img src="/assets/project2.jpeg" alt="Project 2" className="hero-image" />
          <h3 className="hero-title">THE ROGER HUB <span className="new-badge">NEW</span></h3>
          <p className="hero-desc">
            The Roger Hub is an immersive web experience showcasing the tennis-inspired 'On' sneakers, a collaboration born out of a partnership with the legendary Roger Federer.
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