import PropTypes from 'prop-types';
import NavButton from '../components/Button/nav-button';

NavbarModal.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default function NavbarModal({ onClose }) {
  const handleNavButtonClick = () => {
    onClose();
  };

  // Gestion de canvas pour le footer
  document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = 200;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = ['#ff007a', '#00d9e9', '#bd00ff', '#4ade80'][
          Math.floor(Math.random() * 4)
        ];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Régénération des particules lorsqu'elles sortent du canvas
        if (
          this.x < 0 ||
          this.x > canvas.width ||
          this.y < 0 ||
          this.y > canvas.height
        ) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 5 + 1;
          this.speedX = Math.random() * 3 - 1.5;
          this.speedY = Math.random() * 3 - 1.5;
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    let particlesArray = [];

    function init() {
      particlesArray = [];
      let initialCount = 100;
      for (let i = 0; i < initialCount; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Maintenir le nombre de particules entre 20 et 100
      if (particlesArray.length < 20) {
        let additionalParticles =
          Math.random() * (80 - particlesArray.length) +
          20 -
          particlesArray.length;
        for (let i = 0; i < additionalParticles; i++) {
          particlesArray.push(new Particle());
        }
      }

      requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = 200;
      init();
    });
  });

  return (
    <>
      <section className="navbar-modal absolute top-0 left-0 z-10 bg-text-border-white bg-opacity-50 flex flex-col justify-start items-center w-full h-full">
        <ul className="modal-mobile-ul-navbar flex flex-col align-middle items-center text-text-border-white text-3xl w-full">
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
        </ul>
        <button onClick={onClose} className="button type1">
          <span className="btn-txt">Close</span>
        </button>
      </section>
    </>
  );
}
