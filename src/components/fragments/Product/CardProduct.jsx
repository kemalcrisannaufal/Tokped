import StarIcon from "../../../assets/icons/star.svg";
import StoreIcon from "../../../assets/icons/store_icon.svg";
import StarSellerIcon from "../../../assets/icons/star_seller.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardProduct = (props) => {
  const { children, url } = props;
  return (
    <Link to={url}>
      <div className="w-full max-w-xs border rounded-lg bg-cover shadow-lg">
        {children}
      </div>
    </Link>
  );
};

CardProduct.propTypes = {
  children: PropTypes.node,
  url: PropTypes.string.isRequired
};

const Header = (props) => {
  const { image } = props;
  return (
    <div className="bg-green-500 h-[300px]">
      <img src={image} alt="" className="object-cover h-[300px]" />
    </div>
  );
};

Header.propTypes = {
  image: PropTypes.string,
};

const Body = (props) => {
  const {
    title,
    price = 0,
    priceBefore = 0,
    discountPriceBefore = 0,
    discount = 0,
    isStarSeller = false,
    place,
    rating,
    sold,
  } = props;
  return (
    <>
      <div className="w-full p-4 pb-10 flex flex-col gap-1">
        <h5 className="line-clamp-2 text-lg text-black font-medium">{title}</h5>
        <h2 className="text-xl font-bold">
          {price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </h2>

        {priceBefore !== 0 && (
          <div className="flex gap-2 my-1">
            <p className="line-through text-slate-400 font-semibold">
              {priceBefore}
            </p>
            <strong className="text-red-500">{discountPriceBefore}%</strong>
          </div>
        )}

        <div className="w-[110px] py-1 px-2 bg-green-200 flex justify-center items-center rounded">
          <p className="font-bold text-sm text-green-600">
            Diskon {discount / 1000} Rb
          </p>
        </div>

        <div className="flex items-center gap-2 text-md text-slate-500 font-semibold">
          <img
            src={isStarSeller ? StarSellerIcon : StoreIcon}
            alt="*"
            className="h-5 w-5"
          />
          <div>
            <p>{place}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-md text-slate-500 font-semibold">
          <img src={StarIcon} alt="*" className="h-5 w-5" />
          <div>
            <p>
              {rating.toFixed(1)} | {sold}+ terjual
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

Body.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceBefore: PropTypes.number,
  discountPriceBefore: PropTypes.number,
  discount: PropTypes.number,
  isStarSeller: PropTypes.bool.isRequired,
  place: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  sold: PropTypes.number.isRequired,
};

CardProduct.Header = Header;
CardProduct.Body = Body;

export default CardProduct;
