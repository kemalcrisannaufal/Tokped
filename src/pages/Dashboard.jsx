import MainLayout from "../components/layouts/MainLayout";
import CardProduct from "../components/fragments/Product/CardProduct";

const Dashboard = () => {
  return (
    <MainLayout>
      <CardProduct url="/product">
        <CardProduct.Header image={"images/shoes.jpg"}></CardProduct.Header>
        <CardProduct.Body
          title={
            "Screw-in Stabilizers Washers for Mechanical Keyboard"
          }
          price={10000}
          priceBefore={15000}
          discountPriceBefore={10}
          discount={10000}
          isStarSeller={true}
          place={"Jakarta Pusat"}
          rating={5.0}
          sold={40000}
        ></CardProduct.Body>
      </CardProduct>
    </MainLayout>
  );
};

export default Dashboard;
