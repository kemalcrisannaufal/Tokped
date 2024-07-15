import PropTypes from "prop-types";

const CategoryCard = (props) => {
  const { image } = props;
  return (
    <div className="h-34 w-34 border rounded-md overflow-hidden flex item-center justify-center mr-4">
      <img src={image} alt="image" className="object-cover" />
    </div>
  );
};

CategoryCard.propTypes = {
  image: PropTypes.string.isRequired,
};

export default CategoryCard;
