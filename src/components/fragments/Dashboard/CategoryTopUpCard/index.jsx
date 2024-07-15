import TitleSection from "../../../elements/Text/TitleSection";
import TopUpCard from "./TopUpCard";
import { Link } from "react-router-dom";
import CategorySlider from "./CategorySlider";

const CategoryTopUpCard = () => {
  const categoryImages = [
    "images/figure.webp",
    "images/flat_shoes.webp",
    "images/hd_fd.webp",
    "images/makanan_kering.webp",
    "images/tas_pria.webp",
    "images/toples.webp",
  ];

  return (
    <div className="w-full rounded-lg border px-4 py-5 flex gap-3">
      <div className="w-1/2">
        <div className="mb-4">
          <TitleSection>Kategori Pilihan</TitleSection>
        </div>
        <div className="w-full px-4">
          <CategorySlider images={categoryImages}></CategorySlider>
        </div>
      </div>
      <div className="w-1/2">
        <div className="flex items-center gap-3 mb-4">
          <TitleSection>Top Up dan Tagihan </TitleSection>
          <Link>
            <span className="text-green-600 font-bold">Lihat Semua</span>
          </Link>
        </div>

        <TopUpCard></TopUpCard>
      </div>
    </div>
  );
};
export default CategoryTopUpCard;
