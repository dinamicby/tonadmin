// @flow
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, Dropdown } from 'react-bootstrap';

const TasksChart = (): React$Element<any> => {
    var barChartData = {
        labels: [
            'Sprint 1',
            'Sprint 2',
            'Sprint 3',
            'Sprint 4',
            'Sprint 5',
            'Sprint 6',
            'Sprint 7',
            'Sprint 8',
            'Sprint 9',
            'Sprint 10',
            'Sprint 11',
            'Sprint 12',
            'Sprint 13',
            'Sprint 14',
            'Sprint 15',
            'Sprint 16',
            'Sprint 17',
            'Sprint 18',
            'Sprint 19',
            'Sprint 20',
            'Sprint 21',
            'Sprint 22',
            'Sprint 23',
            'Sprint 24',
        ],
        datasets: [
            {
                barPercentage: 0.7,
                categoryPercentage: 0.5,
                label: 'This year',
                backgroundColor: '#727cf5',
                borderColor: '#727cf5',
                data: [16, 44, 32, 48, 72, 60, 84, 64, 78, 50, 68, 34, 26, 44, 32, 48, 72, 60, 74, 52, 62, 50, 32, 22],
            },
        ],
    };

    var barChartOpts = {
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        tooltips: {
            intersect: false,
        },
        hover: {
            intersect: true,
        },
        plugins: {
            filler: {
                propagate: false,
            },
        },
        scales: {
            xAxes: [
                {
                    reverse: true,
                    gridLines: {
                        color: 'rgba(0,0,0,0.05)',
                    },
                },
            ],
            yAxes: [
                {
                    ticks: {
                        stepSize: 10,
                        display: false,
                    },
                    min: 10,
                    max: 100,
                    display: true,
                    borderDash: [5, 5],
                    gridLines: {
                        color: 'rgba(0,0,0,0)',
                        fontColor: '#fff',
                    },
                },
            ],
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

                <h4 className="header-title mb-4">Tasks Overview</h4>

                <div dir="ltr">
                    <div style={{ height: '320px' }} className="mt-3 chartjs-chart">
                        <Bar data={barChartData} options={barChartOpts} />
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default TasksChart;
