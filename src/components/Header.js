import Navbar from "react-bootstrap/Navbar";

import Nav from 'react-bootstrap/Nav';


function NavHeader() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/React_portfolio/">Home</Nav.Link>
        <Nav.Link href="/React_portfolio//portfolio">Portfolio</Nav.Link>
      </Nav>

    </Navbar>
  );
}

export default NavHeader;