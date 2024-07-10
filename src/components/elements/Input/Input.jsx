import PropTypes from "prop-types";

const Input = (props) => {
  const { icon, placeholder } = props;
  return (
    <div className="flex border rounded-lg w-full h-14 items-center pl-3 pr-4 shadow-sm focus-within:ring-1 focus-within:ring-green-600">
      <div className="mr-3">
        <img src={icon} alt="Search Icon" className="w-8 h-8 text-gray-500" />
      </div>
      <div className="w-full">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full h-full border-none focus:outline-none text-gray-700 text-xl font-normal"
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  icon: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
