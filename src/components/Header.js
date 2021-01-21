import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";

function NavHeader() {
  return (
    <Navbar bg="primary" variant="dark">
      <Link href="/">Navbar</Link>
      <Nav className="mr-auto">
        <Link href ="/">Home</Link>
        <Link href ="/portfolio">Portfolio</Link>
      </Nav>
    </Navbar>
  );
}

export default NavHeader;
