// @flow
import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

const NavBar = (): React$Element<React$FragmentType> => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="py-lg-3">
                <Container>
                    <Navbar.Brand href="/" className="me-lg-5">
                        <img src={logo} alt="" className="logo-dark" height="18" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav">
                        <i className="mdi mdi-menu"></i>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav as="ul" className="me-auto align-items-center">
                            <Nav.Item as="li" className="mx-lg-1">
                                <Nav.Link href="" className="active">
                                    Home
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mx-lg-1">
                                <Nav.Link href="">Features</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mx-lg-1">
                                <Nav.Link href="">Pricing</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mx-lg-1">
                                <Nav.Link href="">FAQs</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mx-lg-1">
                                <Nav.Link href="">Clients</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mx-lg-1">
                                <Nav.Link href="">Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Nav className="ms-auto align-items-center">
                            <Nav.Item className="me-0">
                                <Nav.Link
                                    href="https://themes.getbootstrap.com/product/hyper-react-admin-dashboard-template/"
                                    target="_blank"
                                    className="d-lg-none">
                                    Purchase now
                                </Nav.Link>
                                <Link
                                    to="https://themes.getbootstrap.com/product/hyper-react-admin-dashboard-template/"
                                    target="_blank"
                                    className="btn btn-sm btn-light btn-rounded d-none d-lg-inline-flex">
                                    <i className="mdi mdi-basket me-2"></i> Purchase Now
                                </Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
