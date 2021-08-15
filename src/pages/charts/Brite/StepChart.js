// @flow
import React from 'react';
import { Card } from 'react-bootstrap';
import { Step, withResponsiveness } from 'britecharts-react';

const ResponsiveStepChart = withResponsiveness(Step);

// step chart
const StepChart = (): React$Element<any> => {
    // container style
    const chartContainerStyle = {
        width: '100%',
        height: '300px',
    };

    // chart data
    const stepData = [
        { key: 'Appetizer', value: 400 },
        { key: 'Soup', value: 300 },
        { key: 'Salad', value: 300 },
        { key: 'Lunch', value: 250 },
        { key: 'Dinner', value: 220 },
        { key: 'Dessert', value: 100 },
        { key: 'Midnight snack', value: 20 },
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-4">Step Chart</h4>
                <div className="step-container" style={chartContainerStyle}>
                    <ResponsiveStepChart
                        data={stepData}
                        height={300}
                        margin={{ top: 40, right: 40, bottom: 80, left: 50 }}
                    />
                </div>
            </Card.Body>
        </Card>
    );
};

export default StepChart;
