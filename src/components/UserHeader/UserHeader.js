import React from 'react';
import { Form, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Joseph from '../../assets/Joseph Gray.png'
import { FaCaretDown } from "react-icons/fa";

const UserHeader = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home"><span>A</span><span>T</span><span>G</span><span>.</span><span>W</span><span>O</span><span>R</span><span>L</span><span>D</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto my-lg-0 my-3">
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
            <div className='flex'>
                        <img className='me-2' style={{width: '40px', height: '40px'}} src={Joseph} alt=''/>
                        <p className='fw-bold mt-16'>Joseph Gray</p>
                        <FaCaretDown className='d-inline'></FaCaretDown>
                    </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default UserHeader;