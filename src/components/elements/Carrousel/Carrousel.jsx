import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import ArrowLeftIcon from "../../../assets/icons/arrow_left.svg";
import ArrowRightIcon from "../../../assets/icons/arrow_right.svg";
import { Link } from "react-router-dom";

const Carousel = (props) => {
  const { images } = props;
  const [idx, setIdx] = useState(0);

  const changeImage = (direction) => {
    if (direction === "prev") {
      setIdx(idx === 0 ? images.length - 1 : idx - 1);
    } else {
      setIdx(idx === images.length - 1 ? 0 : idx + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prevIdx) => (prevIdx === images.length - 1 ? 0 : prevIdx + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="mb-10 relative">
      <div className="w-full rounded-lg relative border">
        <div className="w-full overflow-hidden rounded-lg">
          <Link to={"/product"} className="block">
            <img
              src={images[idx]}
              alt={`image-${idx}`}
              className="w-full h-full object-cover"
              draggable="false"
            />
          </Link>
        </div>

        <div className="absolute inset-0 flex justify-between items-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
          <NavigationButton
            type={"prev"}
            icon={ArrowLeftIcon}
            classname={"transform -translate-x-10"}
            onClick={() => changeImage("prev")}
          />

          <NavigationButton
            type={"next"}
            icon={ArrowRightIcon}
            classname={"transform translate-x-10"}
            onClick={() => changeImage("next")}
          />
        </div>

        <div className="flex gap-1 absolute bottom-3 left-4">
          {images.map((_, index) => {
            return <Indicator key={index} isActive={index === idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};

const NavigationButton = (props) => {
  const { type, icon, classname, onClick } = props;
  return (
    <button type="button" onClick={onClick}>
      <div
        className={`w-10 h-10 rounded-full bg-white flex justify-center items-center shadow-lg ${classname}`}
      >
        <img src={icon} alt={type} className="w-4 h-4" draggable={false} />
      </div>
    </button>
  );
};

NavigationButton.propTypes = {
  type: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  classname: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

const Indicator = (props) => {
  const { isActive } = props;
  return (
    <div
      className={`w-2 h-2 rounded-full bg-white ${
        isActive ? "opacity-100" : "opacity-50"
      }`}
    ></div>
  );
};

Indicator.propTypes = {
  isActive: PropTypes.bool,
};

export default Carousel;
