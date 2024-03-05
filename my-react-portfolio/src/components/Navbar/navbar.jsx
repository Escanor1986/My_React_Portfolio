import NavButton from '../Button/nav-button';
import Logo from '../Logo/logo';

export default function Navbar() {
  return (
    <nav className="flex justify-center px-8 py-4">
      <ul className="flex justify-between items-center text-text-border-white text-3xl w-full">
        <div className="flex">
          <Logo href="#/" />
        </div>
        <div className="flex">
          <NavButton href="#/" buttonText="Home" />
          <NavButton href="#/about" buttonText="About" />
          <NavButton href="#/projects" buttonText="Projects" />
          <NavButton href="#/trainings" buttonText="Trainings" />
          <NavButton href="#/skills" buttonText="Skills" />
          <NavButton href="#/contact" buttonText="Contact" />
        </div>
      </ul>
    </nav>
  );
}
