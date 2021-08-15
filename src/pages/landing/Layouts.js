// @flow
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

type LayoutsProps = {
    layouts: {
        image: string,
        layout: string,
    }[],
};

const Layouts = ({ layouts }: LayoutsProps): React$Element<React$FragmentType> => {
    return (
        <>
            <section className="py-5 bg-light-lighten border-top border-bottom border-light">
                <Container>
                    <Row>
                        <Col>
                            <div className="text-center">
                                <h3>
                                    Flexible <span className="text-primary">Layouts</span>
                                </h3>
                                <p className="text-muted mt-2">
                                    There are three different layout options available to cater need for any <br />{' '}
                                    modern web application.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-4">
                        {layouts.map((item, index) => {
                            return (
                                <Col lg={4} key={index} className="mb-4">
                                    <div className="demo-box text-center mt-3 mt-lg-0">
                                        <img src={item.image} alt="" className="img-fluid shadow-sm rounded" />
                                        <h5 className="mt-3 f-17">{item.layout}</h5>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Layouts;
