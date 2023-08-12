import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navb = () => {
  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="logo">Designdive</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto"> {/* This class aligns items to the right */}
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#home">Contact</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <div className="header-btn"> {/* This class aligns items to the right */}
              <a
                className="btn-default btn-small round btn-grad"
                target="_blank"
                href="#"
              >
                Sign In
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navb;