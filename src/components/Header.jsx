import "./Header.css";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <Nav className="justify-content-end" activeKey="/">
      <Nav.Item>
        <NavLink className="nav-link text-dark" to="/">
          Accueil
        </NavLink>
      </Nav.Item>
      <NavLink className="nav-link text-dark" to="/category/vetements">
        Vêtements
      </NavLink>
      <Nav.Item>
        <NavLink className="nav-link text-dark" to="/category/chaussures">
          Chaussures
        </NavLink>
      </Nav.Item>
    </Nav>
  );
}
export default Header;
