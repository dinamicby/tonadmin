// @flow
import React from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import PageTitle from '../../../components/PageTitle';
import TodoList from '../../../components/TodoList';

import Statistics from './Statistics';
import CampaignsChart from './CampaignsChart';
import RevenueChart from './RevenueChart';
import Performers from './Performers';
import Leads from './Leads';
import CampaignWidget from './CampaignWidget';

const CRMDashboardPage = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/crm' },
                    { label: 'CRM', path: '/dashboard/crm', active: true },
                ]}
                title={'CRM'}
            />

            <Statistics />

            <Row>
                <Col lg={5}>
                    <CampaignsChart />
                </Col>
                <Col lg={7}>
                    <RevenueChart />
                </Col>
            </Row>

            <Row>
                <Col xl={4} lg={12}>
                    <Performers />
                </Col>
                <Col xl={4} lg={6}>
                    <Leads />
                </Col>
                <Col xl={4} lg={6}>
                    <CampaignWidget />
                    <TodoList height="224px" />
                </Col>
            </Row>
        </>
    );
};

export default CRMDashboardPage;
