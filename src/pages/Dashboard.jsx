import MainLayout from "../components/layouts/MainLayout";
import CardProduct from "../components/fragments/Product/CardProduct";

const Dashboard = () => {
  return (
    <MainLayout>
      <CardProduct url="/">
        <CardProduct.Header image={"images/shoes.jpg"}></CardProduct.Header>
        <CardProduct.Body
          title={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maxime id libero fuga sunt doloribus? Tempora quae aliquam voluptate magnam."
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
