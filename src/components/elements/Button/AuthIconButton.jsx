import PropTypes from "prop-types";

const AuthIconButton = (props) => {
  const { classname, children, text } = props;
  return (
    <button
      className={`w-full h-14 py-2 border rounded-lg border-slate-300 ${classname}`}
    >
      <div className="flex items-center justify-center text-xl text-slate-500 font-bold">
        {children}
        {text}
      </div>
    </button>
  );
};

AuthIconButton.propTypes = {
  classname: PropTypes.string,
  children: PropTypes.node,
  text: PropTypes.string.isRequired,
};

export default AuthIconButton;
