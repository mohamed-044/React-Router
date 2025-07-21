import { Outlet } from "react-router";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <Container as="main">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};
export default Layout;
