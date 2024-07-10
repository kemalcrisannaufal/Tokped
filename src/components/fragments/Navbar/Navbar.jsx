import Button from "../../elements/Button/Button";
import IconButton from "../../elements/Button/IconButton";
import { ReactComponent as CartIcon } from "../../../assets/icons/cart.svg";
import Input from "../../elements/Input/Input";
import SearchIcon from "../../../assets/icons/search.svg";
import TextLinkNavbar from "../../elements/Link/TextLinkNavbar";
import HeaderNavbar from "./HeaderNavbar";

const Navbar = () => {
  return (
    <div>
      <HeaderNavbar/>
      <div className="h-32 mx-10 flex">
        <div className="w-1/5 h-3/4 flex items-center justify-between px-5">
          <div>
            <img src="images/tkp-logo.png" alt="tokopedia" width={220} />
          </div>
          <Button
            classname={"border-none text-xl text-slate-700 font-semibold"}
          >
            Kategori
          </Button>
        </div>

        <div className="w-3/5 flex flex-col items-center">
          <div className="w-full h-3/4 flex items-center">
            <Input icon={SearchIcon} placeholder="Cari di Tokopedia"></Input>
          </div>
          <div className="w-full h-1/4">
            <ul className="flex gap-5">
              <li>
                <TextLinkNavbar url={"/"}>Sabun Cair</TextLinkNavbar>
              </li>
              <li>
                <TextLinkNavbar url={"/"}>Celana Kargo</TextLinkNavbar>
              </li>
              <li>
                <TextLinkNavbar url={"/"}>Cat Choize</TextLinkNavbar>
              </li>
              <li>
                <TextLinkNavbar url={"/"}>Sepeda Listrik</TextLinkNavbar>
              </li>
              <li>
                <TextLinkNavbar url={"/"}>Sepatu</TextLinkNavbar>
              </li>
              <li>
                <TextLinkNavbar url={"/"}>Tas Selempang Wanita</TextLinkNavbar>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/5 h-3/4 flex items-center px-5">
          <div className="w-1/4 flex justify-center items-center">
            <IconButton>
              <CartIcon></CartIcon>
            </IconButton>
          </div>
          <div className="w-3/4 flex justify-between border-l px-8 gap-3">
            <Button bgColor="white">Masuk</Button>
            <Button bgColor="green">Daftar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
