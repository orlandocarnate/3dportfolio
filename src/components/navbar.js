import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-expand-lg navbar-dark bg-primary">
      <Navbar.Brand href="./">Orlando Carnate</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="./#/">Home</Nav.Link>
          <Nav.Link href="./#/Threejs">Three.js Projects</Nav.Link>
          <Nav.Link href="./#/VRTours">VR Tours</Nav.Link>
          <Nav.Link href="./#/Architecture">Architecture</Nav.Link>
          <Nav.Link href="./#/Tradeshows">Tradeshows & Exhibits</Nav.Link>
          <Nav.Link href="https://www.youtube.com/playlist?list=PLv0bey_3GrtIx5w71fSIR25fJ38iyN_11">
            <i className="fab fa-youtube"></i> Animations
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/orlando-carnate/">
            <i className="fab fa-linkedin"></i> LinkedIn
          </Nav.Link>
          <Nav.Link href="https://github.com/orlandocarnate">
            <i className="fab fa-github"></i>GitHub
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
