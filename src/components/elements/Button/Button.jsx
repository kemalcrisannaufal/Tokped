import PropTypes from "prop-types";

const Button = (props) => {
  const { children, classname, bgColor, onClick } = props;
  return (
    <button
      className={`px-5 py-2 h-11 text-md font-bold ${
        bgColor === "green"
          ? "bg-green-600 text-white hover:bg-green-700"
          : "bg-white text-green-600 border border-green-600"
      }  rounded rounded-xl ${classname}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  classname: PropTypes.string,
  bgColor: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
