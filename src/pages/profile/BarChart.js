// @flow
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

const BarChart = (): React$Element<any> => {
    const barChartData = (canvas) => {
        // create gradient
        var ctx = canvas.getContext('2d');
        var gradientStroke = ctx.createLinearGradient(0, 500, 0, 150);
        gradientStroke.addColorStop(0, '#fa5c7c');
        gradientStroke.addColorStop(1, '#727cf5');

        return {
            // labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Orders',
                    backgroundColor: gradientStroke,
                    borderColor: gradientStroke,
                    hoverBackgroundColor: gradientStroke,
                    hoverBorderColor: gradientStroke,
                    categoryPercentage: 0.5,
                    barPercentage: 0.7,
                    data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81],
                },
                {
                    label: 'Revenue',
                    backgroundColor: '#e3eaef',
                    borderColor: '#e3eaef',
                    hoverBackgroundColor: '#e3eaef',
                    hoverBorderColor: '#e3eaef',
                    categoryPercentage: 0.5,
                    barPercentage: 0.7,
                    data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59],
                },
            ],
        };
    };

    // options
    const barChartOpts = {
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        scales: {
            yAxes: [
                {
                    gridLines: {
                        display: false,
                        color: 'rgba(0,0,0,0.05)',
                    },
                    stacked: false,
                    ticks: {
                        stepSize: 20,
                    },
                },
            ],
            xAxes: [
                {
                    stacked: false,
                    gridLines: {
                        color: 'rgba(0,0,0,0.01)',
                    },
                },
            ],
        },
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Orders & Revenue</h4>

                <div style={{ height: '260px' }} className="chartjs-chart">
                    <Bar data={barChartData} options={barChartOpts} />
                </div>
            </Card.Body>
        </Card>
    );
};

export default BarChart;
