import PencilIcon from "../../../assets/icons/pencil.svg";
import ChatIcon from "../../../assets/icons/chat.svg";
import ShareIcon from "../../../assets/icons/share.svg";
import LoveIcon from "../../../assets/icons/love.svg";
import Button from "../../../components/elements/Button/Button";
import ActionButton from "../../../components/elements/Button/ActionButton";
import PropTypes from "prop-types";
import { useState } from "react";

const CardItemCart = (props) => {
  const { stock, price = 0 } = props;

  const [total, setTotal] = useState(0);

  const incrementTotal = () => {
    setTotal(total + 1);
  };

  const decrementTotal = () => {
    if (total > 0) {
      setTotal(total - 1);
    }
  };

  return (
    <div className="max-w-sm border p-5">
      <h1 className="font-bold text-2xl">Atur jumlah dan catatan</h1>
      <div className="flex justify-between items-center mt-8">
        <div className="flex justify-center items-center gap-4 h-10 border rounded rounded-lg text-2xl">
          <button className="w-10" onClick={decrementTotal}>
            -
          </button>
          <p>{total}</p>
          <button className="w-10 text-green-600" onClick={incrementTotal}>
            +
          </button>
        </div>
        <p className="text-xl">
          Stok Total: <span className="text-orange-500">Sisa {stock}</span>
        </p>
      </div>
      <div className="flex items-center gap-3 mt-2">
        <img src={PencilIcon} alt="-" className="w-6 h-6" />
        <p className="text-green-600 font-semibold">Tambah Catatan</p>
      </div>

      <div className="flex justify-between items-center mt-5">
        <p className="text-slate-600 text-xl">Subtotal</p>
        <p className="font-bold text-3xl">
          {price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-8">
        <Button bgColor={"green"}>+ Keranjang</Button>
        <Button>Beli</Button>
      </div>
      <div className="flex mt-5">
        <ActionButton icon={ChatIcon} label="Chat" classname={"border-r"} />
        <ActionButton icon={LoveIcon} label="Wishlisht" />
        <ActionButton icon={ShareIcon} label="Share" classname={"border-l"} />
      </div>
    </div>
  );
};

CardItemCart.propTypes = {
  stock: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default CardItemCart;
