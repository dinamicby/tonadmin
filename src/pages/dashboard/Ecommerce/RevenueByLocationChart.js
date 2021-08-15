// @flow
import React from 'react';
import { Card, Dropdown, ProgressBar } from 'react-bootstrap';

// components
import { WorldVectorMap } from '../../../components/VectorMap/';

const RevenueByLocationChart = (): React$Element<React$FragmentType> => {
    // vector map config
    const options = {
        zoomOnScroll: false,
        markers: [
            { name: 'New York', coords: [40.71, -74.0] },
            { name: 'San Francisco', coords: [37.77, -122.41] },
            { name: 'Sydney', coords: [-33.86, 151.2] },
            { name: 'Singapore', coords: [1.3, 103.8] },
        ],
        markerStyle: {
            initial: {
                r: 9,
                fill: '#727cf5',
                'fill-opacity': 0.9,
                stroke: '#fff',
                'stroke-width': 7,
                'stroke-opacity': 0.4,
            },
            hover: {
                fill: '#727cf5',
                stroke: '#fff',
                'fill-opacity': 1,
                'stroke-width': 1.5,
            },
        },
        regionStyle: {
            initial: {
                fill: '#e3eaef',
            },
        },
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <Dropdown className="float-end" align="end">
                        <Dropdown.Toggle variant="link" className="arrow-none card-drop p-0 shadow-none">
                            <i className="mdi mdi-dots-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Sales Report</Dropdown.Item>
                            <Dropdown.Item>Export Report</Dropdown.Item>
                            <Dropdown.Item>Profit</Dropdown.Item>
                            <Dropdown.Item>Action</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <h4 className="header-title mb-3">Revenue By Location</h4>

                    <div className="mb-4 mt-4">
                        <WorldVectorMap height="224px" width="100%" options={options} />
                    </div>

                    <h5 className="mb-1 mt-0 fw-normal">New York</h5>
                    <div className="progress-w-percent">
                        <span className="progress-value fw-bold">72k</span>
                        <ProgressBar now={72} className="progress-sm" />
                    </div>
                    <h5 className="mb-1 mt-0 fw-normal">San Francisco</h5>
                    <div className="progress-w-percent">
                        <span className="progress-value fw-bold">39k</span>
                        <ProgressBar now={39} className="progress-sm" />
                    </div>
                    <h5 className="mb-1 mt-0 fw-normal">Sydney</h5>
                    <div className="progress-w-percent">
                        <span className="progress-value fw-bold">25k</span>
                        <ProgressBar now={25} className="progress-sm" />
                    </div>
                    <h5 className="mb-1 mt-0 fw-normal">Singapore</h5>
                    <div className="progress-w-percent mb-0">
                        <span className="progress-value fw-bold">61k</span>
                        <ProgressBar now={61} className="progress-sm" />
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default RevenueByLocationChart;
