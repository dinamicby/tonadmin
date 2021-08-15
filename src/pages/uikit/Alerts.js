// @flow
import React, { useState } from 'react';
import { Row, Col, Card, Alert } from 'react-bootstrap';
import classNames from 'classnames';

// components
import PageTitle from '../../components/PageTitle';

const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

const DefaultAlerts = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Default Alert</h4>
                <p className="text-muted font-14 mb-3">
                    Provide contextual feedback messages for typical user actions with the handful of available and
                    flexible alert messages. Alerts are available for any length of text, as well as an optional dismiss
                    button.
                </p>
                <p>
                    For proper styling, use one of the eight
                    <strong>required</strong> contextual classes (e.g.,
                    <code>.alert-success</code>). For background color use class
                    <code>.bg-* </code>, <code>.text-white </code>
                </p>

                {colors.map((color, index) => {
                    return (
                        <Alert variant={color} key={index}>
                            <strong>{color} - </strong> A simple {color} alert—check it out!
                        </Alert>
                    );
                })}
            </Card.Body>
        </Card>
    );
};

const DismissibleAlerts = () => {
    const [colors, setColors] = useState([
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
    ]);

    /*
     * handle close
     */
    const handleClose = (index) => {
        const list = [...colors];
        list.splice(index, 1);
        setColors(list);
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Dismissing Alerts</h4>
                <p className="text-muted font-14 mb-3">
                    Add a dismiss button and the <code>.alert-dismissible</code> class, which adds extra padding to the
                    right of the alert and positions the <code>.btn-close</code> button.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Alert variant={color} key={index} onClose={() => handleClose(index)} dismissible>
                            <strong>{color} - </strong> A simple {color} alert—check it out!
                        </Alert>
                    );
                })}
            </Card.Body>
        </Card>
    );
};

const AlertsWithIcon = () => {
    const [colors] = useState(['success', 'danger', 'warning', 'info']);

    const icons = ['dripicons-checkmark', 'dripicons-wrong', 'dripicons-warning', 'dripicons-information'];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Icons with Alerts</h4>
                <p className="text-muted font-14">
                    You can also include additional elements like icons, heading, etc along side the actual message.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Alert variant={color} key={index}>
                            <i className={classNames(icons[index], 'me-2')}></i>This is a<strong>{color}</strong> alert
                            - check it out!
                        </Alert>
                    );
                })}
            </Card.Body>
        </Card>
    );
};

const AlertsWithRichContent = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Additional content</h4>
                <p className="text-muted font-14">
                    Alerts can also contain additional HTML elements like headings, paragraphs and dividers.
                </p>

                <Alert variant="success">
                    <h4 className="alert-heading">Well done!</h4>
                    <p>
                        Aww yeah, you successfully read this important alert message. This example text is going to run
                        a bit longer so that you can see how spacing within an alert works with this kind of content.
                    </p>
                    <hr />
                    <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                    </p>
                </Alert>
            </Card.Body>
        </Card>
    );
};

const CustomAlerts = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Custom Alerts</h4>
                <p className="text-muted font-14">
                    Display alert with transparent background and with contextual text color. Use classes{' '}
                    <code>.bg-white</code>, and <code>.text-*</code>. E.g. <code>bg-white text-primary</code>.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Alert variant={color} className={classNames('bg-white', 'text-' + color)} key={index}>
                            This is a <strong>{color}</strong> alert—check it out!
                        </Alert>
                    );
                })}
            </Card.Body>
        </Card>
    );
};

const AlertsWithLink = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Link Color</h4>
                <p className="text-muted font-14">
                    Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any
                    alert.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Alert variant={color} key={index}>
                            A simple {color} alert with{' '}
                            <a href="/" className="alert-link">
                                an example link
                            </a>
                            . Give it a click if you like.
                        </Alert>
                    );
                })}
            </Card.Body>
        </Card>
    );
};

const Alerts = (): React$Element<React$FragmentType> => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Base UI', path: '/ui/alerts' },
                    { label: 'Alerts', path: '/ui/alerts', active: true },
                ]}
                title={'Alerts'}
            />

            <Row>
                <Col lg={6}>
                    <DefaultAlerts />
                </Col>

                <Col lg={6}>
                    <DismissibleAlerts />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <CustomAlerts />
                </Col>
                <Col lg={6}>
                    <AlertsWithLink />
                </Col>
            </Row>

            <Row>
                <Col>
                    <AlertsWithIcon />
                </Col>
                <Col>
                    <AlertsWithRichContent />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Alerts;
