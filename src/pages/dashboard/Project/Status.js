// @flow
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Card, Dropdown, Row, Col } from 'react-bootstrap';

const Status = (): React$Element<any> => {
    const colors = ['#0acf97', '#727cf5', '#fa5c7c'];

    const donutChartData = {
        labels: ['Completed', 'In-progress', 'Behind'],
        datasets: [
            {
                data: [64, 26, 10],
                backgroundColor: colors,
                borderColor: 'transparent',
                borderWidth: '3',
            },
        ],
    };

    const donutChartOpts = {
        maintainAspectRatio: false,
        cutoutPercentage: 80,
        legend: {
            display: false,
        },
    };

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

                <h4 className="header-title mb-4">Project Status</h4>

                <div className="my-4 chartjs-chart" style={{ height: '202px' }}>
                    <Doughnut data={donutChartData} options={donutChartOpts} />
                </div>

                <Row className="text-center mt-2 py-2">
                    <Col lg={4}>
                        <i className="mdi mdi-trending-up text-success mt-3 h3"></i>
                        <h3 className="fw-normal">
                            <span>64%</span>
                        </h3>
                        <p className="text-muted mb-0">Completed</p>
                    </Col>

                    <Col lg={4}>
                        <i className="mdi mdi-trending-down text-primary mt-3 h3"></i>
                        <h3 className="fw-normal">
                            <span>26%</span>
                        </h3>
                        <p className="text-muted mb-0"> In-progress</p>
                    </Col>

                    <Col lg={4}>
                        <i className="mdi mdi-trending-down text-danger mt-3 h3"></i>
                        <h3 className="fw-normal">
                            <span>10%</span>
                        </h3>
                        <p className="text-muted mb-0"> Behind</p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Status;
