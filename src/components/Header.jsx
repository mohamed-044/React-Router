import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router';
function Header() {
  return (
    <Nav className="justify-content-end" activeKey="/">
      <Nav.Item>
        <Nav.Link className="text-dark" as={Link} to="/">Accueil</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-dark" as={Link} to="/category/vetements">Vêtements</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-dark" as={Link} to="/category/chaussures">Chaussures</Nav.Link>
      </Nav.Item>
    </Nav>
  );;
}
export default Header;
