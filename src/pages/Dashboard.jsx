import MainLayout from "../components/layouts/MainLayout";
import CardProduct from "../components/fragments/Product/CardProduct";
import Carousel from "../components/elements/Carrousel/Carrousel";

const Dashboard = () => {
  const images = [
    'images/car_1.webp',
    'images/car_2.webp',
    'images/car_3.webp',
    'images/car_4.webp',
  ];
  return (
    <MainLayout>
      <Carousel images={images}></Carousel>
      <div className="flex gap-2">
        
        <CardProduct url="/product">
          <CardProduct.Header
            image={"images/tropicana.jpg"}
          ></CardProduct.Header>
          <CardProduct.Body
            title={"Tropicana Slim Cafe Latte (10 sch) - Kopi Bebas Gula"}
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
        <CardProduct url="/product">
          <CardProduct.Header
            image={"images/tropicana.jpg"}
          ></CardProduct.Header>
          <CardProduct.Body
            title={"Tropicana Slim Cafe Latte (10 sch) - Kopi Bebas Gula"}
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
        <CardProduct url="/product">
          <CardProduct.Header
            image={"images/tropicana.jpg"}
          ></CardProduct.Header>
          <CardProduct.Body
            title={"Tropicana Slim Cafe Latte (10 sch) - Kopi Bebas Gula"}
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
      </div>
    </MainLayout>
  );
};

export default Dashboard;
