import PropTypes from "prop-types";

const InputField = (props) => {
  const { value, handleChange, labelText, id, placeholder, type, name, color } = props;

  return (
    <div className="input-field">
      <label className="input-field__label" htmlFor={id} style={{color:`${color}`}}>
        {labelText}
      </label>
      <input
        className="input-field__input"
        id={id}
        type={type}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

InputField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
};

InputField.defaultProps = {
  placeholder: "",
  type: "text",
  name: "",
  color: "#000"
};

export default InputField;
