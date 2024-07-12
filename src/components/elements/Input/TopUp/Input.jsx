import PropTypes from "prop-types";

const Input = (props) => {
  const { type = "text", name, placeholder, classname } = props;
  return (
    <input
      type={type}
      className={`w-full p-3 text-xs rounded-md border border-slate-400 ${classname} focus:outline-none focus-within:ring-1 focus-within:ring-green-800`}
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  classname: PropTypes.string,
};
export default Input;
