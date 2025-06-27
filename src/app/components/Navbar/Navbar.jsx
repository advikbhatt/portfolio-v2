import './Navbar.css';
import { TbMail, TbBrandLinkedin, TbBrandGithub } from 'react-icons/tb';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__location">Dehradun, IN</div>

      <div className="navbar__logo">ADVIK BHATT</div>
<div className="navbar__socials">
  <a href="mailto:advikbhatt24@gmail.com"><TbMail /></a>
  <a href="https://www.linkedin.com/in/advikbhatt/"><TbBrandLinkedin /></a>
  <a href="https://github.com/advikbhatt"><TbBrandGithub /></a>
</div>

    </header>
  );
}
