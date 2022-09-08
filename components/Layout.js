import Navbar from "./Navbar";
// import Nav2 from "./test";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* <Nav2 /> */}
      <div>Hi 1</div>
      <div>{children}</div>
    </>
  );
};

export default Layout;
