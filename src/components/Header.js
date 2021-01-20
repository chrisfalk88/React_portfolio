import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";

function NavHeader() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand>Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to ="/home">Home</Link>
        <Link to ="/portfolio">Portfolio</Link>
      </Nav>
    </Navbar>
  );
}

export default NavHeader;
