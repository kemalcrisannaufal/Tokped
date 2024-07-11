import PropTypes from "prop-types";

import Footer from "../elements/Footer/Footer";

const AuthLayout = (props) => {
  const { children, type } = props;
  return (
    <div className="flex flex-col min-w-[1520px] w-full min-h-screen justify-between items-center mt-8">
      <img
        src="images/tkp-logo.png"
        alt=""
        width={200}
        height={50}
        draggable="false"
      />

      {children}

      {type === "register" ? (
        <Footer text="Tokopedia Care" url="https://www.tokopedia.com/help" />
      ) : (
        <Footer text="Bantuan" url="https://www.tokopedia.com/help" />
      )}
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};

export default AuthLayout;
