// @flow
import React, { useState } from 'react';
import { Card, Dropdown, Row, Col } from 'react-bootstrap';

// components
import HyperDatepicker from '../../../components/Datepicker';

const Calendar = (): React$Element<any> => {
    const [date, setDate] = useState(new Date());

    return (
        <Card>
            <Card.Body>
                <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle variant="link" className="arrow-none card-drop p-0 shadow-none">
                        <i className="mdi mdi-dots-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Weekly Report</Dropdown.Item>
                        <Dropdown.Item>Monthly Report</Dropdown.Item>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <h4 className="header-title mb-3">Your Calendar</h4>

                <Row>
                    <Col md={7} className="calendar-widget">
                        <HyperDatepicker value={date} onChange={(date) => setDate(date)} inline />
                    </Col>
                    <Col md={5}>
                        <ul className="list-unstyled">
                            <li className="mb-4">
                                <p className="text-muted mb-1 font-13">
                                    <i className="mdi mdi-calendar"></i> 7:30 AM - 10:00 AM
                                </p>
                                <h5>Meeting with BD Team</h5>
                            </li>
                            <li className="mb-4">
                                <p className="text-muted mb-1 font-13">
                                    <i className="mdi mdi-calendar"></i> 10:30 AM - 11:45 AM
                                </p>
                                <h5>Design Review - Hyper Admin</h5>
                            </li>
                            <li className="mb-4">
                                <p className="text-muted mb-1 font-13">
                                    <i className="mdi mdi-calendar"></i> 12:15 PM - 02:00 PM
                                </p>
                                <h5>Setup Github Repository</h5>
                            </li>
                            <li>
                                <p className="text-muted mb-1 font-13">
                                    <i className="mdi mdi-calendar"></i> 5:30 PM - 07:00 PM
                                </p>
                                <h5>Meeting with Design Studio</h5>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Calendar;
