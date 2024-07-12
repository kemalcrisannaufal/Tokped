import TitleSection from "../../../elements/Text/TitleSection";
import TopUpCard from "./TopUpCard";
import { Link } from "react-router-dom";

const CategoryTopUpCard = () => {
  return (
    <div className="w-full rounded-lg border px-4 py-5 flex">
      <div className="w-1/2">
        <TitleSection>Kategori Pilihan</TitleSection>
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
