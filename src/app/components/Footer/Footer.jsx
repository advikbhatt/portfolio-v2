import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <hr className="footer-line" />

      <div className="footer-cta">
        <p>
          nothing together<a> <span className="footer-email">EMAIL ME</span></a> Let's create something
        </p>
      </div>

      <hr className="footer-line" />

      <div className="footer-bottom">
        <div className="footer-left">
          <span className="footer-brand">ADVIK ©</span>
          <span className="footer-legal">2025</span>
        </div>
        <div className="footer-right">
          <a href="https://www.linkedin.com/in/advikbhatt/">LINKEDIN</a>
          <span>•</span>
          <a href="https://www.instagram.com/advikbhatt_24/">INSTAGRAM</a>
          <span>•</span>
          <a href="https://github.com/advikbhatt">GITHUB</a>
          <span>•</span>
          <a href="https://leetcode.com/u/advik_bhatt/">LEETCODE</a>
        </div>
      </div>
    </footer>
  );
}
