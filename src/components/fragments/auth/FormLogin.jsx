import backgroundImage from "../../../../public/images/login-bg.png";
import AuthInput from "../../elements/Input/Auth/AuthInput";
import { Link } from "react-router-dom";
import AuthButton from "../../elements/Button/AuthButton";
import Separator from "../../elements/Separator/Separator";
import AuthIconButton from "../../elements/Button/AuthIconButton";
import { ReactComponent as GoogleIcon } from "../../../assets/icons/google.svg";
import { ReactComponent as QRIcon } from "../../../assets/icons/qr.svg";

const FormLogin = () => {
  const handleLogin = () => {
    window.location.href = "/";
  };
  return (
    <div
      className="flex w-full justify-center items-center"
      style={{
        background: `url(${backgroundImage})`,
        backgroundSize: 800,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="bg-white max-w-sm w-full py-20 px-10 flex flex-col rounded-lg border border-slate-300 shadow-lg">
        <div className="w-full flex justify-between">
          <h1 className="text-3xl font-bold">Masuk</h1>
          <h5 className="text-md text-green-600">
            <Link to={"/register"}>Daftar</Link>
          </h5>
        </div>
        <AuthInput
          classname={"mt-10 mb-5"}
          placeholder={"Nomor HP Atau Email"}
          text="08123456789"
        ></AuthInput>
        <div className="mb-3 text-end text-green-600 text-sm">
          <Link>Butuh Bantuan?</Link>
        </div>
        <AuthButton onClick={handleLogin}>Lanjut</AuthButton>
        <Separator classname={"my-10"}></Separator>
        <AuthIconButton
          classname={"mb-5"}
          text="Scan Kode QR"
          onClick={handleLogin}
        >
          <QRIcon className="mr-2" />
        </AuthIconButton>
        <AuthIconButton text={"Masuk dengan Google"} onClick={handleLogin}>
          <GoogleIcon className="mr-2" />
        </AuthIconButton>
      </div>
    </div>
  );
};

export default FormLogin;
