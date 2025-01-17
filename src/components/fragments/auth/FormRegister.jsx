import { Link } from "react-router-dom";
import AuthIconButton from "../../elements/Button/AuthIconButton";
import Separator from "../../elements/Separator/Separator";
import AuthInput from "../../elements/Input/Auth/AuthInput";
import AuthButton from "../../elements/Button/AuthButton";
import { ReactComponent as GoogleIcon } from "../../../assets/icons/google.svg";

const FormRegister = () => {
  return (
    <div className="flex w-full justify-center items-center gap-8">
      <div className="flex flex-col justify-center items-center">
        <img
          draggable="false"
          src="images/register_icon_new.png"
          alt="-"
          width={350}
          className="mb-5"
        />
        <h5 className="text-xl font-bold text-center py-2">
          Jual Beli Mudah Hanya di Tokopedia
        </h5>
        <p className="text-md text-slate-700 text-center">
          Gabung dan rasakan kemudahan bertransaksi di Tokopedia
        </p>
      </div>

      <div className="w-full max-w-md border border-slate-300 rounded-lg p-10 shadow-lg">
        <div className="text-center">
          <h1 className="font-bold text-2xl text-slate-700 mb-2">
            Daftar Sekarang
          </h1>
          <h5 className="text-md">
            Sudah Punya akun Tokopedia?{" "}
            <Link to={"/login"} className="text-green-600 font-bold">
              Masuk
            </Link>
          </h5>
        </div>
        <AuthIconButton classname={"mt-5"} text={"Google"}>
          <GoogleIcon />
        </AuthIconButton>
        <Separator></Separator>
        <AuthInput
          classname={"mt-5 mb-8"}
          placeholder={"Nomor HP atau E-mail"}
          text="email@tokopedia.com"
        />
        <AuthButton>Daftar</AuthButton>
        <div className="mt-5 text-center text-sm font-normal text-slate-800">
          <h5>Dengan mendaftar, Saya menyetujui</h5>
          <h5>
            {" "}
            <span className="text-green-600 font-bold">
              <a href="https://www.tokopedia.com/terms?lang=id">
                Syarat & Ketentuan
              </a>
            </span>{" "}
            serta{" "}
            <span className="text-green-600 font-bold">
              <a href="https://www.tokopedia.com/privacy?lang=id">
                Kebijakan Privasi Tokopedia
              </a>
            </span>
            .
          </h5>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
