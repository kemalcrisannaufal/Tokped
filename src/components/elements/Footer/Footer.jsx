import PropTypes from "prop-types";

const Footer = (props) => {
  const { text, url } = props;
  return (
    <div className="mb-10">
      <p className="text-slate-400 text-xl font-semibold">
        © 2009-2024, PT Tokopedia{" "}
        <span className="text-green-600 ml-5"><a href={url}>{text}</a></span>
      </p>
    </div>
  );
};

Footer.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Footer;
