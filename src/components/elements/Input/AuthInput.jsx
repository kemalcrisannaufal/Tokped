import PropTypes from "prop-types";

const AuthInput = (props) => {
  const { placeholder, classname, text, name } = props;
  return (
    <div className={classname}>
      <div
        className={`flex items-center h-14 border border-slate-300 rounded-lg`}
      >
        <input
          className="h-full w-full px-4"
          type="text"
          placeholder={placeholder}
          name={name}
          id={name}
        />
      </div>
      <div>
        <p className="text-slate-600">Contoh: {text}</p>
      </div>
    </div>
  );
};

AuthInput.propTypes = {
  placeholder: PropTypes.string,
  classname: PropTypes.string,
  text: PropTypes.string.isRequired,
  name: PropTypes.string
};

export default AuthInput;
