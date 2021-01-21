import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../index.css"

import Nav from "react-bootstrap/Nav";

function NavHeader() {
  return (
    <Navbar bg="primary" variant="dark">
      <Link to="/" class="link"> Navbar  </Link>
      <Nav className="mr-auto">
        <Link to="/" class="link"> Home  </Link>
        <Link to="/portfolio" class="link"> Portfolio </Link>
      </Nav>
    </Navbar>
  );
}

export default NavHeader;
