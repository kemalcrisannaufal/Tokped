import Button from "../../elements/Button/Button";
import StarSellerIcon from "../../../assets/icons/star_seller.svg";
// import StoreIcon from "../../../assets/icons/store_icon.svg";

const StoreProductInformation = () => {
  return (
    <div className="mt-5">
      <div className="w-full flex justify-between items-center">
        <div className="flex">
          <div className="h-14 w-14 rounded-full border overflow-hidden">
            <img src="images/store.png" alt="" className="object-cover" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <img src={StarSellerIcon} alt="-" className="w-6 h-6" />
              <h1 className="font-bold text-lg">NutriMart</h1>
            </div>
            <p className="font-bold text-green-600">
              <span className="text-xl m-0 p-0">.</span> Online
            </p>
          </div>
        </div>
        <div>
          <Button>Follow</Button>
        </div>
      </div>
    </div>
  );
};

export default StoreProductInformation;
