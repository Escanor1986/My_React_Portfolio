import React from 'react';
import PropTypes from 'prop-types';

function NavButton(props) {
  return (
    <li className="navbar-li px-3 group">
      <a href={props.href} className="block text-center">
        <button className="navbar-button relative overflow-hidden p-4 bg-dark-bg border-2 border-rose-bg rounded-3xl shadow-lg transition-all duration-500 ease-in-out transform group-hover:scale-105">
          <span className="block relative z-10">{props.buttonText}</span>
          <div className="absolute inset-0 bg-rose-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
          <div className="absolute inset-0 z-0 w-full h-full transform rotate-45 translate-x-full bg-white opacity-20 group-hover:translate-x-0 transition-transform duration-700"></div>
        </button>
      </a>
    </li>
  );
}

NavButton.propTypes = {
  href: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default NavButton;
