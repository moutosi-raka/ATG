import React, { useState } from 'react';
import { Form, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import union from '../../assets/Union 1.png'
import SignInModal from '../SignInModal/SignInModal';
import './Header.css'


const Header = () => {
  const [modalShow, setModalShow] = useState(false);
    return (
        <Navbar className='my-2' collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand className='fw-bold'><span className='first'>A</span><span className='first'>T</span><span className='first'>G</span><span  className='first'>.</span><span className='last'>W</span>
        <img style={{width: '20px'}} src={union} alt='' />
          <span className='last'>R</span><span className='last'>L</span><span className='last'>D</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
            <Form className="flex search">
              <FaSearch className='me-2'></FaSearch>
            <input
              type="search"
              placeholder="Search for your favorite groups in ATG"
              className="me-2 border-0 search-input"
              aria-label="Search"
            />
          </Form>
            </Nav>
            <Nav>
              <p href="#deets">Create account.<Link onClick={() => setModalShow(true)} className='text-primary text-decoration-none'>It's Free!</Link></p>
            </Nav>
          </Navbar.Collapse>
      <SignInModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </Container>
      </Navbar>
    );
};

export default Header;