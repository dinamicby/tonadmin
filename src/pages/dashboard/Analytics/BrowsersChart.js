// @flow
import React from 'react';
import Chart from 'react-apexcharts';
import { Card, Dropdown } from 'react-bootstrap';

const BrowsersChart = (): React$Element<any> => {
    const apexOpts = {
        grid: {
            padding: {
                left: 0,
                right: 0,
            },
        },
        chart: {
            height: 343,
            type: 'radar',
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
        },
        labels: ['Chrome', 'Firefox', 'Safari', 'Opera', 'Edge', 'Explorer'],
        plotOptions: {
            radar: {
                size: 130,
                polygons: {
                    strokeColor: '#e9e9e9',
                    fill: {
                        colors: ['#f8f8f8', '#fff'],
                    },
                },
            },
        },
        colors: ['#727cf5'],
        yaxis: {
            labels: {
                formatter: function (val) {
                    return val + '%';
                },
            },
        },
        dataLabels: {
            enabled: true,
        },
        markers: {
            size: 4,
            colors: ['#fff'],
            strokeColor: ['#727cf5'],
            strokeWidth: 2,
        },
    };

    const apexData = [
        {
            name: 'Usage',
            data: [80, 50, 30, 40, 60, 20],
        },
    ];

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

                <h4 className="header-title">Sessions by Browser</h4>

                <Chart options={apexOpts} series={apexData} type="radar" height={352} className="apex-charts mt-3" />
            </Card.Body>
        </Card>
    );
};

export default BrowsersChart;
