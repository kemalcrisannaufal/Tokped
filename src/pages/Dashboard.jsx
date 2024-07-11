import MainLayout from "../components/layouts/MainLayout";
import CardProduct from "../components/fragments/Product/CardProduct";

const Dashboard = () => {
  return (
    <MainLayout>
      <CardProduct url="/product">
        <CardProduct.Header image={"images/tropicana.jpg"}></CardProduct.Header>
        <CardProduct.Body
          title={
            "Tropicana Slim Cafe Latte (10 sch) - Kopi Bebas Gula"
          }
          price={29300}
          priceBefore={57700}
          discountPriceBefore={10}
          discount={182000}
          isStarSeller={true}
          place={"Jakarta Pusat"}
          rating={5.0}
          sold={40000}
          storeName="Raedam Tbk"
        ></CardProduct.Body>
      </CardProduct>
    </MainLayout>
  );
};

export default Dashboard;
