import PropsType from "prop-types";
import Footer from "../components/footer";
import Navbar from "../components/navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropsType.node.isRequired,
};

export default Layout;
