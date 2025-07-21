import Nav from 'react-bootstrap/Nav';
function Header() {
  return (
    <Nav className="justify-content-end" activeKey="/">
      <Nav.Item as="li">
        <Nav.Link className="text-dark" href="/">Accueil</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className="text-dark" href="/category/vetements">Vêtements</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className="text-dark" href="/category/chaussures">Chaussures</Nav.Link>
      </Nav.Item>
    </Nav>
  );;
}
export default Header;
