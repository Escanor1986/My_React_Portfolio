import NavbarPortal from '../../portals/NavbarPortal';
import NavButton from '../Button/nav-button';

export default function Navbar() {
  return (
    <nav className="mobile-navbar flex flex-col justify-center p-8">
      <span className="mobile-menu-icon">
        <NavbarPortal />
      </span>
      <ul className="mobile-ul-navbar flex justify-between items-center text-text-border-white text-3xl w-full">
        <div className="navbar-left flex">
          <NavButton href="#/" buttonText="Home" />
          <NavButton href="#/about" buttonText="About" />
          <NavButton href="#/projects" buttonText="Projects" />
        </div>
        <div className="navbar-right flex">
          <NavButton href="#/trainings" buttonText="Trainings" />
          <NavButton href="#/skills" buttonText="Skills" />
          <NavButton href="#/contact" buttonText="Contact" />
        </div>
      </ul>
    </nav>
  );
}
