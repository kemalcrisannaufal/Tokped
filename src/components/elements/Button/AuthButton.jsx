import PropTypes from "prop-types";

const AuthButton = (props) => {
  const { children, type, onClick } = props;
  return (
    <button
      type={type}
      className="w-full h-16 text-white bg-green-600 rounded-lg text-xl font-bold"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

AuthButton.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default AuthButton;
