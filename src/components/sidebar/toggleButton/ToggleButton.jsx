import PropTypes from 'prop-types';
import "./toggleButton.scss";

const ToggleButton = ({ setOpen }) => {
  return (
    <button className="toggle-button" onClick={setOpen}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
  );
};

ToggleButton.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export default ToggleButton;
