// adding necessary file 
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

// Header Component 
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">AllFa</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>

                        {user.displayName ?
                            <div>
                                <a onClick={logOut} href="/">LogOut</a>
                                <Navbar.Text className='text-white'>
                                    Signed in as: <span>{user.displayName}</span>
                                </Navbar.Text>
                            </div> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;