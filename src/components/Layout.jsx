import { Outlet } from "react-router";
import Home from "../pages/Home";
import Footer from "../pages/Footer";

const Layout = () => {
  return (
    <>
      <Home />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
