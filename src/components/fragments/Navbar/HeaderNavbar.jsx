import TextLinkNavbar from "../../elements/Link/TextLinkNavbar";
import SmarthphoneIcon from "../../../assets/icons/smartphone.svg";

const HeaderNavbar = () => {
  return (
    <div className="w-full h-10 bg-slate-100 flex justify-between items-center px-16">
      <div className="flex items-center gap-3">
        <img src={SmarthphoneIcon} alt="phone" className="h-8 w-8" />
        <TextLinkNavbar url={"https://www.tokopedia.com/about/"}>
          Donwload Tokopedia App
        </TextLinkNavbar>
      </div>
      <div>
        <ul className="flex gap-5">
          <li>
            <TextLinkNavbar url={"https://www.tokopedia.com/about/"}>
              Tentang Tokopedia
            </TextLinkNavbar>
          </li>
          <li>
            <TextLinkNavbar url={"https://www.tokopedia.com/mitra"}>
              Mitra Tokopedia
            </TextLinkNavbar>
          </li>
          <li>
            <TextLinkNavbar
              url={
                "https://seller.tokopedia.com/edu/topic/mulai-bisnis/materi-seller-baru/"
              }
            >
              Mulai Berjualan
            </TextLinkNavbar>
          </li>
          <li>
            <TextLinkNavbar url={"https://www.tokopedia.com/discovery/deals"}>
              Promo
            </TextLinkNavbar>
          </li>
          <li>
            <TextLinkNavbar url={"https://www.tokopedia.com/help/"}>
              Tokopedia Care
            </TextLinkNavbar>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderNavbar;
