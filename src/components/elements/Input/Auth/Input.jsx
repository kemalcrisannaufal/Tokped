import PropTypes from "prop-types";

const Input = (props) => {
  const { icon, placeholder } = props;
  return (
    <div className="flex border rounded-lg w-full h-9 items-center pl-3 pr-4 shadow-sm focus-within:ring-1 focus-within:ring-green-600">
      <div className="mr-3">
        <img src={icon} alt="Search Icon" className="w-7 h-7" />
      </div>
      <div className="w-full">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full h-full border-none focus:outline-none text-gray-900 text-md font-normal"
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
