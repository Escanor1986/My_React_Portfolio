import PropTypes from 'prop-types';
import NavButton from '../components/Button/nav-button';

NavbarModal.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default function NavbarModal({ onClose }) {
  const handleNavButtonClick = () => {
    onClose();
  };

  return (
    <>
      <section className="modal absolute top-0 left-0 z-10 bg-text-border-white bg-opacity-50 flex flex-col justify-start items-center w-full h-full">
        <ul className="modal-mobile-ul-navbar flex justify-between items-center text-text-border-white text-3xl w-full">
          <div className="navbar-left flex">
            <NavButton
              href="#/"
              buttonText="Home"
              onClick={handleNavButtonClick}
            />
            <NavButton
              href="#/about"
              buttonText="About"
              onClick={handleNavButtonClick}
            />
            <NavButton
              href="#/projects"
              buttonText="Projects"
              onClick={handleNavButtonClick}
            />
          </div>
          <div className="navbar-right flex">
            <NavButton
              href="#/trainings"
              buttonText="Trainings"
              onClick={handleNavButtonClick}
            />
            <NavButton
              href="#/skills"
              buttonText="Skills"
              onClick={handleNavButtonClick}
            />
            <NavButton
              href="#/contact"
              buttonText="Contact"
              onClick={handleNavButtonClick}
            />
          </div>
        </ul>
        <button onClick={onClose}>Close</button>
      </section>
    </>
  );
}
