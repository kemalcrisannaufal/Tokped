import { ReactComponent as GoogleIcon } from "../../../assets/icons/google.svg";
import PropTypes from "prop-types";

const GoogleLoginButton = (props) => {
  const {classname} = props;
  return (
    <button className= {`w-full h-14 py-2 border rounded-lg border-slate-300 ${classname}`}>
      <div className="flex items-center justify-center text-xl text-slate-500 font-bold">
        <GoogleIcon className="mr-2"/> 
        Google
      </div>
    </button>
  );
};

GoogleLoginButton.propTypes = {
  classname: PropTypes.string
}

export default GoogleLoginButton;
