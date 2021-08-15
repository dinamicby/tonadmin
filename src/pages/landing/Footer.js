// @flow
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import logo from '../../assets/images/logo.png';

const Footer = (): React$Element<React$FragmentType> => {
    return (
        <>
            <footer className="bg-dark py-5">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <img src={logo} alt="" className="logo-dark" height="18" />
                            <p className="text-muted mt-4">
                                Hyper makes it easier to build better websites with
                                <br /> great speed. Save hundreds of hours of design
                                <br /> and development by using it.
                            </p>

                            <ul className="social-list list-inline mt-3">
                                <li className="list-inline-item text-center">
                                    <a href="/landing" className="social-list-item border-primary text-primary">
                                        <i className="mdi mdi-facebook"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item text-center">
                                    <a href="/landing" className="social-list-item border-danger text-danger">
                                        <i className="mdi mdi-google"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item text-center">
                                    <a href="/landing" className="social-list-item border-info text-info">
                                        <i className="mdi mdi-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item text-center">
                                    <a href="/landing" className="social-list-item border-secondary text-secondary">
                                        <i className="mdi mdi-github"></i>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={2} className="mt-3 mt-lg-0">
                            <h5 className="text-light">Company</h5>

                            <ul className="list-unstyled ps-0 mb-0 mt-3">
                                <li className="mt-2">
                                    <a href="/landing" className="text-muted">
                                        About Us
                                    </a>
                                </li>
                                <li className="mt-2">
                                    <a href="/landing" className="text-muted">
                                        Documentation
                                    </a>
                                </li>
                                <li className="mt-2">
                                    <a href="/landing" className="text-muted">
                                        Blog
                                    </a>
                                </li>
                                <li className="mt-2">
                                    <a href="/landing" className="text-muted">
                                        Affiliate Program
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={2} className="mt-3 mt-lg-0">
                            <h5 className="text-light">Apps</h5>

                            <ul className="list-unstyled ps-0 mb-0 mt-3">
                                <li className="mt-2">
                                    <a href="/landing" className="text-muted">
                                        Ecommerce Pages
                                    </a>
                                </li>
                                <li className="mt-2">
                                    <a href="/landing" className="text-muted">
                                        Email
                                    </a>
                                </li>
                                <li className="mt-2">
                                    <a href="/landing" className="text-muted">
                                        Social Feed
                                    </a>
                                </li>
                                <li className="mt-2">
                                    <a href="/landing" className="text-muted">
                                        Projects
                                    </a>
                                </li>
                                <li className="mt-2">
                                    <a href="/landing" className="text-muted">
                                        Tasks Management
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={2} className="mt-3 mt-lg-0">
                            <h5 className="text-light">Discover</h5>
                            <ul className="list-unstyled ps-0 mb-0 mt-3">
                                <li className="mt-2">
                                    <a href="/landing" className="text-muted">
                                        Help Center
                                    </a>
                                </li>
                                <li className="mt-2">
                                    <a href="/landing" className="text-muted">
                                        Our Products
                                    </a>
                                </li>
                                <li className="mt-2">
                                    <a href="/landing" className="text-muted">
                                        Privacy
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="mt-5">
                                <p className="text-muted mt-4 text-center mb-0">
                                    © 2018 - 2021 Hyper. Design and coded by Coderthemes
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;
