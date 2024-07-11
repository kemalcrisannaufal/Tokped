import PropTypes from "prop-types";

const Button = (props) => {
  const { children, classname, bgColor, onClick } = props;
  return (
    <button
      className={`px-4 py-2 font-bold ${
        bgColor === "green"
          ? "bg-green-600 text-white hover:bg-green-700"
          : "bg-white text-green-600 border border-green-600"
      }  rounded rounded-lg ${classname || "text-xs"}`}
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
  onClick: PropTypes.func,
};

export default Button;
