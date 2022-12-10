import React from 'react';
import { Form, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home"><span>A</span><span>T</span><span>G</span><span>.</span><span>W</span><span>O</span><span>R</span><span>L</span><span>D</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Create account.<span>It's Free!</span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;