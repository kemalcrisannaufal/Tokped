import PropTypes from "prop-types";

const TextLinkNavbar = (props) => {
  const { url, children } = props;
  return (
    <a
      href={url}
      className="text-slate-500 text-md font-semibold hover:text-green-600"
    >
      {children}
    </a>
  );
};

TextLinkNavbar.propTypes = {
  url: PropTypes.string,
  children: PropTypes.string,
};

export default TextLinkNavbar;
