import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { NavLink } from "react-router-dom";
import About from "./About";
import Search from "./Search";
import { Button, Navbar, Nav } from "react-bootstrap";
export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <NavLink to="/">
          <Navbar.Brand>Hey!Welcome</Navbar.Brand>
        </NavLink>
        <Nav className="mr-auto">
          <Nav.Link>
            <NavLink to="/">Home</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/About">About</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/Search">Gallary</NavLink>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
