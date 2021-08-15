// @flow
import React from 'react';
import Chart from 'react-apexcharts';
import { Card, Dropdown } from 'react-bootstrap';

const OsChart = (): React$Element<any> => {
    const apexOpts = {
        grid: {
            padding: {
                left: 0,
                right: 0,
            },
        },
        chart: {
            height: 278,
            type: 'radialBar',
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'OS',
                        formatter: function (w) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return 8541;
                        },
                    },
                },
            },
        },
        colors: ['#727cf5', '#0acf97', '#fa5c7c', '#ffbc00'],
        labels: ['Windows', 'Macintosh', 'Linux', 'Android'],
    };

    const apexData = [44, 55, 67, 83];

    return (
        <Card>
            <Card.Body>
                <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle variant="link" className="arrow-none card-drop p-0 shadow-none">
                        <i className="mdi mdi-dots-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Refresh Report</Dropdown.Item>
                        <Dropdown.Item>Export Report</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <h4 className="header-title">Sessions by Operating System</h4>

                <Chart
                    options={apexOpts}
                    series={apexData}
                    type="radialBar"
                    height={278}
                    className="apex-charts mt-3"
                />

                <div className="row text-center mt-2">
                    <div className="col-6">
                        <h4 className="font-weight-normal">
                            <span>6,510</span>
                        </h4>
                        <p className="text-muted mb-0">Online System</p>
                    </div>
                    <div className="col-6">
                        <h4 className="font-weight-normal">
                            <span>2,031</span>
                        </h4>
                        <p className="text-muted mb-0">Offline System</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default OsChart;
