import Navbar from "./Navbar";
// import Nav2 from "./test";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Nav2 /> */}
      {/* <div>Hi 1</div> */}
      <Navbar />
      <div className="">{children}</div>
    </>
  );
};

export default Layout;
