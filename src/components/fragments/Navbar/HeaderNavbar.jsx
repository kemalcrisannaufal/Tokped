import TextLinkNavbar from "../../elements/Link/TextLinkNavbar";
import SmarthphoneIcon from "../../../assets/icons/smartphone.svg";

const HeaderNavbar = () => {
  return (
    <div className="w-full h-9 bg-slate-100 flex justify-between items-center px-16">
      <div className="flex items-center gap-3">
        <img src={SmarthphoneIcon} alt="phone" className="h-6 w-6" />
        <TextLinkNavbar url={"https://www.tokopedia.com/about/"}>
          Download Tokopedia App
        </TextLinkNavbar>
      </div>
      <div>
        <ul className="flex items-center gap-5 ">
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
