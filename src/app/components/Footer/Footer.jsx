import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <hr className="footer-line" />

      <div className="footer-cta">
        <p>
          nothing together <span className="footer-email">EMAIL ME</span> Let's create something
        </p>
      </div>

      <hr className="footer-line" />

      <div className="footer-bottom">
        <div className="footer-left">
          <span className="footer-brand">ADVIK ©</span>
          <span className="footer-legal">2025</span>
        </div>
        <div className="footer-right">
          <a href="#">TWITTER</a>
          <span>•</span>
          <a href="#">INSTAGRAM</a>
          <span>•</span>
          <a href="#">DRIBBBLE</a>
          <span>•</span>
          <a href="#">BEHANCE</a>
        </div>
      </div>
    </footer>
  );
}
