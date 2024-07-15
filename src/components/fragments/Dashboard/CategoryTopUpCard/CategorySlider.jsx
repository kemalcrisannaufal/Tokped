import PropTypes from "prop-types";
import Slider from "react-slick";
import CategoryCard from "./CategoryCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        transform: "translateX(-30px) translateY(-10px)",
        border: "1px solid black",
        borderRadius: "50%",
        zIndex: 1,
        overflow: "hidden",
      }}
      onClick={onClick}
    />
  );
}

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex: 1,
        transform: "translateX(15px) translateY(-10px)",
        border: "1px solid black",
        overflow: "hidden",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

const CategorySlider = (props) => {
  const { images } = props;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <CategoryCard image={image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

CategorySlider.propTypes = {
  images: PropTypes.array.isRequired,
};

export default CategorySlider;
