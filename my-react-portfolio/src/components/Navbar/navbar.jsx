import NavButton from '../Button/nav-button';
import Logo from '../Logo/logo';

export default function Navbar() {
  return (
    <nav className="flex justify-center px-8 py-2">
      <ul className="flex justify-between items-center text-text-border-white text-3xl">
        <NavButton href="#/" buttonText="Home" />
        <NavButton href="#/about" buttonText="About" />
        <NavButton href="#/projects" buttonText="Projects" />
        <Logo href="#/" />
        <NavButton href="#/trainings" buttonText="Trainings" />
        <NavButton href="#/skills" buttonText="Skills" />
        <NavButton href="#/contact" buttonText="Contact" />
      </ul>
    </nav>
  );
}
