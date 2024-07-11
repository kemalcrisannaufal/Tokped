import PropTypes from "prop-types";

const IconButton = (props) => {
  const { children, onClick, classname } = props;
  return (
    <button
      className={`p-1 rounded rounded-lg hover:bg-slate-200 ${classname}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

IconButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  classname: PropTypes.string
};

export default IconButton;
