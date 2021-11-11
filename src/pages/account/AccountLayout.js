// @flow
import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Logo from '../../assets/images/logo.png';

type AccountLayoutProps = {
    bottomLinks?: React$Element<any>,
    children?: any,
};

const AccountLayout = ({ bottomLinks, children }: AccountLayoutProps): React$Element<any> => {
    const { t } = useTranslation();

    useEffect(() => {
        if (document.body) document.body.classList.add('authentication-bg');

        return () => {
            if (document.body) document.body.classList.remove('authentication-bg');
        };
    }, []);

    return (
        <>
            <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5} xxl={4}>
                            <Card>
                                {/* logo */}
                                <Card.Header className="pt-4 pb-4 text-center bg-primary">
                                    <Link to="/">
                                      <div className="logo-text">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31C24.2843 31 31 24.2843 31 16Z" stroke="#fff" strokeWidth="1.5"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.70711 12.2929C8.09763 11.9024 8.7308 11.9024 9.12132 12.2929L11.6971 14.8686C12.0931 15.2646 12.2911 15.4627 12.3653 15.691C12.4305 15.8918 12.4305 16.1082 12.3653 16.309C12.2911 16.5373 12.0931 16.7354 11.6971 17.1314L9.12132 19.7071C9.12132 19.7071 9.12132 19.7071 9.12132 19.7071C8.7308 20.0976 8.09763 20.0976 7.70711 19.7071C7.70711 19.7071 7.70711 19.7071 7.70711 19.7071V19.7071C7.70711 19.7071 7.70711 19.7071 7.70711 19.7071C7.31658 19.3166 7.31658 18.6834 7.70711 18.2929C7.70711 18.2929 7.70711 18.2929 7.70711 18.2929L9.43431 16.5657C9.63232 16.3677 9.73133 16.2687 9.76842 16.1545C9.80105 16.0541 9.80105 15.9459 9.76842 15.8455C9.73133 15.7313 9.63232 15.6323 9.43431 15.4343L7.70711 13.7071C7.31658 13.3166 7.31658 12.6834 7.70711 12.2929V12.2929Z" fill="#2B3461"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 19C13.5 18.4477 13.9477 18 14.5 18H17.5C18.0523 18 18.5 18.4477 18.5 19V19C18.5 19.5523 18.0523 20 17.5 20H14.5C13.9477 20 13.5 19.5523 13.5 19V19Z" fill="#2B3461"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M24.2929 12.2929C23.9024 11.9024 23.2692 11.9024 22.8787 12.2929L20.3029 14.8686C19.9069 15.2646 19.7089 15.4627 19.6347 15.691C19.5695 15.8918 19.5695 16.1082 19.6347 16.309C19.7089 16.5373 19.9069 16.7354 20.3029 17.1314L22.8787 19.7071C22.8787 19.7071 22.8787 19.7071 22.8787 19.7071C23.2692 20.0976 23.9024 20.0976 24.2929 19.7071C24.2929 19.7071 24.2929 19.7071 24.2929 19.7071V19.7071C24.2929 19.7071 24.2929 19.7071 24.2929 19.7071C24.6834 19.3166 24.6834 18.6834 24.2929 18.2929C24.2929 18.2929 24.2929 18.2929 24.2929 18.2929L22.5657 16.5657C22.3677 16.3677 22.2687 16.2687 22.2316 16.1545C22.1989 16.0541 22.1989 15.9459 22.2316 15.8455C22.2687 15.7313 22.3677 15.6323 22.5657 15.4343L24.2929 13.7071C24.6834 13.3166 24.6834 12.6834 24.2929 12.2929V12.2929Z" fill="#2B3461"/>
                                            </svg>
                                          <span className="logo-text " style={{color: "#fff"}}>
                                            TON Admin
                                          </span>
                                        </div>
                                    </Link>
                                </Card.Header>
                                <Card.Body className="p-4">{children}</Card.Body>
                            </Card>

                            {/* bottom links */}

                        </Col>
                    </Row>
                </Container>
            </div>
            {/*<footer className="footer footer-alt">{t('')}</footer>*/}
        </>
    );
};

export default AccountLayout;
