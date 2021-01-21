import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";

function NavHeader() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href ="/">Home</Nav.Link>
        <Nav.Link href ="/portfolio">Portfolio</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavHeader;
