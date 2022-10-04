import Navbar from "./Navbar";
// import Nav2 from "./test";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Nav2 /> */}
      {/* <div>Hi 1</div> */}
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
