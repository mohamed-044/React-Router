import "../assets/styles/Header.css";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <Nav className="justify-content-end" activeKey="/">
      <Nav.Item>
        <Nav.Link as={NavLink} className="text-dark" to="/">
          Accueil
        </Nav.Link>
      </Nav.Item>
      <Nav.Link as={NavLink} className="text-dark" to="/category/vetements">
        Vêtements
      </Nav.Link>
      <Nav.Item>
        <Nav.Link as={NavLink} className="text-dark" to="/category/chaussures">
          Chaussures
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
export default Header;
