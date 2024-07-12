import PropTypes from "prop-types";
import MoreVerticalIcon from "../../../../assets/icons/more_vertical.svg";
import TopUpInput from "../../../elements/Input/TopUp/index";
import { useState } from "react";
import DropDown from "../../../elements/Dropdown/Dropdown";
import Button from "../../../elements/Button/Button";

const TopUpCard = () => {
  const menu = ["Pulsa", "Paket Data", "Flight", "Listrik PLN"];
  const [idx, setIdx] = useState(0);

  const handleTabClick = (idx) => {
    setIdx(idx);
  };

  const priceLabel = [
    "Rp. 5000",
    "Rp. 15000",
    "Rp. 25000",
    "Rp. 50000",
    "Rp. 100000",
  ];
  const price = [5000, 15000, 25000, 50000, 100000];
  const jenisListrik = ["Token Listrik", "Tagihan Listrik", "PLN Non-Taglis"];

  return (
    <div className="w-full border p-3 pb-10 rounded-lg">
      {/* Header */}
      <div className="w-full flex justify-between items-center">
        <div className="w-11/12 h-full flex items-center">
          {menu.map((item, index) => {
            return (
              <TitleTabBar
                key={index}
                isActive={idx === index}
                title={item}
                onClick={() => handleTabClick(index)}
              ></TitleTabBar>
            );
          })}
        </div>
        <div className="w-1/12 flex">
          <div className="flex items-center">
            <button className="p-1 hover:bg-slate-200 rounded-lg">
              <img src={MoreVerticalIcon} alt=":" className="h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* body */}
      {(idx === 0 || idx === 1) && (
        <div className="mt-3 flex items-center gap-2">
          <div className="w-5/6 flex gap-2">
            <div className="w-1/2">
              <TopUpInput
                type={"text"}
                placeholder={"Masukkan Nomor"}
                name="no_hp_top_up"
              >
                Nomor Telepon
              </TopUpInput>
            </div>
            <div className="w-1/2">
              <DropDown
                name="top_op_pulsa_amount"
                option={priceLabel}
                value={price}
                label={"Nominal"}
              ></DropDown>
            </div>
          </div>
          <div className="w-1/6 h-full flex-col transform translate-y-3">
            <Button bgColor={"green"} classname={"w-full"}>
              Beli
            </Button>
          </div>
        </div>
      )}

      {idx === 3 && (
        <div className="mt-3 flex items-center gap-2">
          <div className="w-5/6 flex gap-3">
            <div className="w-1/3">
              <DropDown
                name="jenis_listrik"
                option={jenisListrik}
                value={jenisListrik}
                label={"Jenis Produk Listrik"}
              />
            </div>
            <div className="w-1/3">
              <TopUpInput
                type={"text"}
                placeholder={"Masukkan Nomor"}
                name="no_listrik_top_up"
              >
                No. Meter/ID Pel
              </TopUpInput>
            </div>
            <div className="w-1/3">
              <DropDown
                name="top_op_listrik_amount"
                option={priceLabel}
                value={price}
                label={"Nominal"}
              />
            </div>
          </div>
          <div className="w-1/6">
            <Button bgColor={"green"} classname={"w-full"}>
              Beli
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

const TitleTabBar = (props) => {
  const { title, isActive, onClick } = props;
  return (
    <button
      type="button"
      className={`w-1/5 h-full font-bold text-md py-1 border-b-2 flex-grow ${
        isActive
          ? "text-green-600 border-b-4 border-green-600"
          : "text-gray-500"
      }`}
      onClick={onClick}
    >
      <p className="text-center">{title}</p>
    </button>
  );
};

TitleTabBar.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TopUpCard;
