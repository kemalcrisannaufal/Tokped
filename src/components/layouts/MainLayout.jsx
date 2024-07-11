import Navbar from "../fragments/Navbar/Navbar";
import PropTypes from "prop-types";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="min-w-[1520px]">
      <Navbar></Navbar>
      <div className="m-10 mx-32">{children}</div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
