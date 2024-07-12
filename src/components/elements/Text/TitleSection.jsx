import PropTypes from "prop-types";

const TitleSection = (props) => {
  const { children, classname } = props;
  return <h1 className={`text-xl font-bold ${classname}`}>{children}</h1>;
};

TitleSection.propTypes = {
  children: PropTypes.string.isRequired,
  classname: PropTypes.string,
};

export default TitleSection;
