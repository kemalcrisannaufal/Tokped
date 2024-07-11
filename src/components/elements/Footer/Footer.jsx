import PropTypes from "prop-types";

const Footer = (props) => {
  const { text, url } = props;
  return (
    <div className="mb-10">
      <p className="text-gray-600 text-md font-semibold">
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
