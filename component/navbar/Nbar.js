import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Nbar({ data }) {
  return (
    <>
      <Navbar bg="dark" sticky="top" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {data.map((item) => (
             
              <Nav.Link href={item.link}>{item.label}</Nav.Link>
           ))}
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
