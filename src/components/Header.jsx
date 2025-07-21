import "../assets/styles/Header.css";
import Nav from "react-bootstrap/Nav";
import { useMatch, useNavigate } from 'react-router';
import { NavLink } from "react-router-dom";
function Header() {
    const navigate = useNavigate();
    const handleLogin = () => {
    navigate('/');
    };
    const match = useMatch('/category/:query');
  return (
    <header className=" p-3">
        {match && (
        <h2>Catégorie : {match.params.query}</h2>
        ) }
        <button onClick={handleLogin}>Revenir a la page d'accueil</button>
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
    </header>
  );
}
export default Header;
