import MainLayout from "../components/layouts/MainLayout";
import CardItemCart from "../components/fragments/Product/CardItemCart";
import HeaderProduct from "../components/fragments/Product/HeaderProduct";
import BodyProduct from "../components/fragments/Product/BodyProduct";

const productDescription = `
  Tropicana Slim Cafe Latte adalah paduan kopi susu yang sempurna dengan rasa manis yang bisa dinikmati tanpa rasa khawatir karena diformulasikan tanpa penambahan gula pasir sehingga aman untuk diabetesi dan cocok untuk diet. Semangati harimu dengan secangkir Tropicana Slim Cafe Latte!

  Mengapa Tropicana Slim Cafe Latte?
  - Rasa kopi susu yang nikmat
  - Tanpa penambahan gula pasir
  - Aman untuk diabetesi dan cocok untuk diet
  - Lebih rendah kafein, aman untuk ibu hamil dan menyusui.

  Cara Penyajian dan Petunjuk Konsumsi :
  Larutkan 1 sachet Tropicana Slim Cafe Latte dalam 200 ml air hangat. Aduk merata, dan secangkir kopi hangat yang nikmat lezat pun siap Anda nikmati.

  Nutrimart merekomendasikan Tropicana Slim Cafe Latte untuk kamu yang:
  - Mencari KOPI NIKMAT ala CAFE, TANPA GULA PASIR
  - Memulai POLA HIDUP SEHAT dengan membatasi asupan gula
  - MenJAGA KADAR GULA DARAH
  - Memiliki DIABETES
  - Menjalankan DIET
  - Mementingkan KREDIBILITAS produk dengan pengalaman hampir 50 TAHUN
`;

const importantInformation = `
  Hi dear, terima kasih sudah berbelanja di Seller Nutrimart.
  Sebagai informasi hari Senin - Jumat pemesanan sebelum jam 12 Siang akan kami proses dihari yang sama.
  Pesanan pada hari Jumat setelah jam 12 Siang, Sabtu, & Minggu akan kami proses pengiriman dihari Senin.
  Jam kerja  Senin - Jumat : 08.30 - 18.00
                  Sabtu : 08.30 - 13.00
  Hari Sabtu, Minggu & Libu Nasional (Libur Pengiriman)

  Anteraja/Sicepat akan di pick up kurir maks 2x24 jam

  REX merupakan jasa pengiriman cargo shg membutuhkan waktu yang lebih lama untuk proses pengirimannya.

  Info: untuk produk promo ataupun Flash Sale maksimal pembelian 5 pcs/produk

  Terima kasih atas pengertiannya ya :)

  Happy Shopping :)

  Salam,
  Nutrimart
`;

const ProductDetailPage = () => {
  return (
    <MainLayout>
      <div className="flex">
        <div className="w-3/4 flex">
          <div className="w-2/5 flex justify-center">
            <div className="w-80 h-80 border rounded-lg shadow">
              <img
                src="images/tropicana.jpg"
                alt="product"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="w-3/5 px-14">
            <HeaderProduct
              title="Tropicana Slim Cafe Latte (10 sch) - Kopi Bebas Gula"
              sold={10000}
              rating={5}
              numOfRating={15000}
              numOfDiscussion={99}
              price={29300}
              discount={49}
              priceBefore={57700}
            ></HeaderProduct>

            <BodyProduct
              isFood={true}
              isHalal={true}
              condition="Baru"
              minOrder={1}
              etalase="Tropicana Slim"
              description={productDescription}
              importantInformation={importantInformation}
            ></BodyProduct>
          </div>
        </div>
        <div className="w-1/4">
          <CardItemCart stock={50} price={29300} />
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetailPage;
