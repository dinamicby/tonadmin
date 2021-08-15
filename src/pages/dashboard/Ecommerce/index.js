// @flow
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import HyperDatepicker from '../../../components/Datepicker';

import Statistics from './Statistics';
import PerformanceChart from './PerformanceChart';
import RevenueChart from './RevenueChart';
import RevenueByLocationChart from './RevenueByLocationChart';
import SalesChart from './SalesChart';
import Activity from './Activity';
import Products from './Products';

const EcommerceDashboard = (): React$Element<React$FragmentType> => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const onDateChange = (date) => {
        if (date) {
            setSelectedDate(date);
        }
    };

    return (
        <>
            <Row>
                <Col>
                    <div className="page-title-box">
                        <div className="page-title-right">
                            <form className="d-flex">
                                <div className="input-group">
                                    <HyperDatepicker
                                        value={selectedDate}
                                        inputClass="form-control-light"
                                        onChange={(date) => {
                                            onDateChange(date);
                                        }}
                                    />
                                </div>
                                <button className="btn btn-primary ms-2">
                                    <i className="mdi mdi-autorenew"></i>
                                </button>
                                <button className="btn btn-primary ms-1">
                                    <i className="mdi mdi-filter-variant"></i>
                                </button>
                            </form>
                        </div>
                        <h4 className="page-title">Dashboard</h4>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xl={5}>
                    <Statistics />
                </Col>

                <Col xl={7}>
                    <PerformanceChart />
                </Col>
            </Row>

            <Row>
                <Col xl={8}>
                    <RevenueChart />
                </Col>
                <Col xl={4}>
                    <RevenueByLocationChart />
                </Col>
            </Row>

            <Row>
                <Col xl={{ span: 6, order: 1 }} lg={{ order: 2 }}>
                    <Products />
                </Col>
                <Col xl={3} lg={{ span: 6, order: 1 }}>
                    <SalesChart />
                </Col>
                <Col xl={3} lg={{ span: 6, order: 1 }}>
                    <Activity />
                </Col>
            </Row>
        </>
    );
};

export default EcommerceDashboard;
