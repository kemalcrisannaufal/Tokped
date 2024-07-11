import PropTypes from "prop-types";
import StarIcon from "../../../assets/icons/star.svg";

const HeaderProduct = (props) => {
  const {
    title,
    sold,
    rating,
    numOfRating,
    numOfDiscussion,
    price,
    discount = 0,
    priceBefore = 0,
  } = props;
  return (
    <div className="mb-3">
      <h1 className="text-xl font-bold tracking-tight">{title}</h1>

      <div className="flex gap-3 text-sm font-semibold  mt-2">
        <p>
          Terjual <span className="text-gray-500">{sold} rb+</span>
        </p>

        <div className="flex items-center gap-1">
          <img src={StarIcon} alt="-" className="h-4 w-4" />
          <p>
            {rating}{" "}
            <span className="text-gray-500">({numOfRating} rating)</span>{" "}
          </p>
        </div>

        <p>
          Diskusi <span className="text-gray-500">({numOfDiscussion})</span>{" "}
        </p>
      </div>

      <div className="mt-4">
        <h1 className="text-3xl font-bold tracking-tight">
          {price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </h1>
      </div>

      {discount !== 0 && (
        <div className="flex gap-1 mt-3">
          <div className="bg-red-100 flex justify-center items-center px-1 rounded-md">
            <p className="text-xs text-red-500 font-bold">{discount}%</p>
          </div>
          <div>
            <p className="text-slate-400 line-through">
              {priceBefore.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

HeaderProduct.propTypes = {
  title: PropTypes.string.isRequired,
  sold: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  numOfRating: PropTypes.number.isRequired,
  numOfDiscussion: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  priceBefore: PropTypes.number.isRequired,
};

export default HeaderProduct;
