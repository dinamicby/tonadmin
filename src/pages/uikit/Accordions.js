// @flow
import React, { useState } from 'react';
import { Row, Col, Card, Collapse, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// components
import PageTitle from '../../components/PageTitle';

const SimpleAccordions = ({ item }) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <>
            <Card className="mb-0">
                <Card.Header>
                    <h5 className="m-0">
                        <Link
                            to="#"
                            className="custom-accordion-title d-block pt-2 pb-2"
                            onClick={toggle}
                            aria-controls={'collapse' + item}
                            aria-expanded={open}>
                            Collapsible Group Item #{item}
                        </Link>
                    </h5>
                </Card.Header>

                <Collapse in={open}>
                    <div>
                        <Card.Body>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                            squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                            nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                            single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                            beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                            lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                            probably haven't heard of them accusamus labore sustainable VHS.
                        </Card.Body>
                    </div>
                </Collapse>
            </Card>
        </>
    );
};

const CustomAccordions = ({ item }) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <>
            <Card className="mb-0">
                <Card.Header>
                    <h5 className="m-0">
                        <Link
                            to="#"
                            className={classNames('custom-accordion-title d-block py-1', { collapsed: open !== true })}
                            onClick={toggle}
                            aria-controls={'collapse' + item}
                            aria-expanded={open}>
                            Collapsible Group Item #{item} <i className="mdi mdi-chevron-down accordion-arrow"></i>
                        </Link>
                    </h5>
                </Card.Header>

                <Collapse in={open} appear>
                    <div>
                        <Card.Body>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                            squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                            nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                            single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                            beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                            lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                            probably haven't heard of them accusamus labore sustainable VHS.
                        </Card.Body>
                    </div>
                </Collapse>
            </Card>
        </>
    );
};

const Accordions = (): React$Element<React$FragmentType> => {
    const [isOpen, setIsOpen] = useState(true);
    const [isOpenFirst, setIsOpenFirst] = useState(true);
    const [isOpenSecond, setIsOpenSecond] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    const toggleFirst = () => setIsOpenFirst(!isOpenFirst);

    const toggleSecond = () => setIsOpenSecond(!isOpenSecond);

    const toggleBoth = () => {
        setIsOpenFirst(!isOpenFirst);
        setIsOpenSecond(!isOpenSecond);
    };

    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Base UI', path: '/ui/accordions' },
                    { label: 'Accordions', path: '/ui/accordions', active: true },
                ]}
                title={'Accordions'}
            />

            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Simple Accordions</h4>
                            <p className="text-muted font-14 mb-3">
                                Use <code>Collapse</code> component to create accordions. The details documentation is
                                available{' '}
                                <a href="https://react-bootstrap-v5.netlify.app/utilities/transitions/">here</a>.
                            </p>

                            <div className="accordion">
                                {['1', '2', '3'].map((item, index) => {
                                    return <SimpleAccordions key={index} item={item} />;
                                })}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Custom Accordions</h4>
                            <p className="text-muted font-14 mb-3">
                                You can have custom look and feel for accorion as well. Just use class{' '}
                                <code>.custom-accordion</code> along with
                                <code>.accordion</code> as a wrapper.
                            </p>

                            <div className="accordion custom-accordion">
                                {['1', '2', '3'].map((item, index) => {
                                    return <CustomAccordions key={index} item={item} />;
                                })}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Collapse</h4>
                            <p className="text-muted font-14 mb-3">
                                Collapse provides the way to toggle the visibility of any content or element.
                            </p>
                            <p>
                                <Link to="#" className="btn btn-primary" onClick={toggle}>
                                    Link with href
                                </Link>

                                <Button color="primary" className="ms-1" type="button" onClick={toggle}>
                                    Button with data-target
                                </Button>
                            </p>
                            <Collapse in={isOpen}>
                                <div>
                                    <div className="card card-body mb-0">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
                                        anderson cred nesciunt sapiente ea proident.
                                    </div>
                                </div>
                            </Collapse>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Multiple Targets</h4>
                            <p className="text-muted font-14 mb-3">
                                Multiple <code>Button</code> or <code>Link</code> can show and hide an element.
                            </p>
                            <p>
                                <Link to="#" className="btn btn-primary" onClick={toggleFirst}>
                                    Toggle first element
                                </Link>

                                <Button variant="primary" className="ms-1" type="button" onClick={toggleSecond}>
                                    Toggle second element
                                </Button>

                                <Button variant="primary" className="ms-1" type="button" onClick={toggleBoth}>
                                    Toggle both elements
                                </Button>
                            </p>
                            <Row>
                                <Col>
                                    <Collapse in={isOpenFirst}>
                                        <div>
                                            <div className="card card-body mb-0">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                                labore wes anderson cred nesciunt sapiente ea proident.
                                            </div>
                                        </div>
                                    </Collapse>
                                </Col>
                                <Col>
                                    <Collapse in={isOpenSecond}>
                                        <div>
                                            <div className="card card-body mb-0">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                                labore wes anderson cred nesciunt sapiente ea proident.
                                            </div>
                                        </div>
                                    </Collapse>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Accordions;
