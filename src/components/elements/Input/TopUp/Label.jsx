import PropTypes from "prop-types";

const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="text-sm text-slate-600 font-bold">
      {children}
    </label>
  );
};

Label.propTypes = {
    htmlFor : PropTypes.string.isRequired,
    children : PropTypes.string.isRequired,
}

export default Label;
