import MainLayout from "../components/layouts/MainLayout";
import CardItemCart from "../components/fragments/Product/CardItemCart";

const ProductDetailPage = () => {
  return (
    <MainLayout>
      <div className="flex">
        <div className="w-2/3 flex">
          <div className="w-1/2">
            <img src="images/shoes.jpg" alt="" />
          </div>
          <div className="w-1/2">
            <h1 className="text-2xl font-bold tracking-wide">
              Screw-in Stabilizers Washers for Mechanical Keyboard
            </h1>
          </div>
        </div>
        <div className="w-1/3">
          <CardItemCart stock={5} price={8000} />
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetailPage;
