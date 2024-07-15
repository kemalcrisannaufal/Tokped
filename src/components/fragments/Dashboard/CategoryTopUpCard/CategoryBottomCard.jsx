import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CategoryBottomCard = (props) => {
  const { image, label } = props;
  return (
    <div className="flex gap-2 rounded-xl border p-2 w-max mr-2">
      <img src={image} alt="" className="h-6 w-6" />
      <p>{label}</p>
    </div>
  );
};

CategoryBottomCard.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const CategoryBottomCardSlider = (props) => {
  const { images, labels } = props;
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };

  return (
    <Slider {...settings} className="w-full flex">
      {images.map((image, index) => (
        <div key={index}>
          <CategoryBottomCard image={image} label={labels[index]} />
        </div>
      ))}
    </Slider>
  );
};

CategoryBottomCardSlider.propTypes = {
  images: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
};

export default CategoryBottomCardSlider;
