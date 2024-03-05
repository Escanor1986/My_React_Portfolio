import PropTypes from 'prop-types';

function Logo(props) {
  return (
    <>
      <li className="mx-5">
        <a href={props.href}>
          <div className="logo-container rounded-full"></div>
        </a>
      </li>
    </>
  );
}

Logo.propTypes = {
  href: PropTypes.string.isRequired
};

export default Logo;
