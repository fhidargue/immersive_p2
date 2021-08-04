import PropTypes from "prop-types";

const Button = (props) => {
  const { handleClick, buttonLabel, type, className, extraClass } = props;

  return (
    <button className={`${className}__btn ${extraClass}`} type={type} onClick={handleClick}>
      {buttonLabel}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string.isRequired,
};

Button.defaultProps = {
  buttonLabel: "",
  type: "button",
  extraClass: ""
};

export default Button;
