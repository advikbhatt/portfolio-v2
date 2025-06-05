import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__location">Dehradun, IN</div>
      <div className="navbar__logo">Advik Bhatt</div>
      <div className="navbar__menu">
        <div className="menu-icon">
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
