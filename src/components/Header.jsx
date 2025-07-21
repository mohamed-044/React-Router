import "../assets/styles/Header.css";
import Nav from "react-bootstrap/Nav";
import { useMatch } from 'react-router';
import { NavLink } from "react-router-dom";
function Header() {
    const match = useMatch('/category/:query');
  return (
    <>
    <header className=" p-3">
        {match && (
        <h2>Catégorie : {match.params.query}</h2>
        ) }
    </header>
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
    </>
  );
}
export default Header;
