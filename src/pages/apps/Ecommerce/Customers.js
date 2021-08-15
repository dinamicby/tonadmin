// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import classNames from 'classnames';

// components
import PageTitle from '../../../components/PageTitle';
import Table from '../../../components/Table';

// dummy data
import { customers } from './Data';

/* name column render */
const NameColumn = ({ row }) => {
    return (
        <div className="table-user">
            <img src={row.original.avatar} alt="" className="me-2 rounded-circle" />
            <Link to="/" className="text-body fw-semibold">
                {row.original.name}
            </Link>
        </div>
    );
};

/* status column render */
const StatusColumn = ({ row }) => {
    return (
        <React.Fragment>
            <span
                className={classNames('badge', {
                    'badge-success-lighten': row.original.status === 'Active',
                    'badge-danger-lighten': row.original.status === 'Blocked',
                })}>
                {row.original.status}
            </span>
        </React.Fragment>
    );
};

/* action column render */
const ActionColumn = ({ row }) => {
    return (
        <React.Fragment>
            <Link to="/" className="action-icon">
                {' '}
                <i className="mdi mdi-eye"></i>
            </Link>
            <Link to="/" className="action-icon">
                {' '}
                <i className="mdi mdi-square-edit-outline"></i>
            </Link>
            <Link to="/" className="action-icon">
                {' '}
                <i className="mdi mdi-delete"></i>
            </Link>
        </React.Fragment>
    );
};

const columns = [
    {
        Header: 'Customer',
        accessor: 'name',
        sort: true,
        Cell: NameColumn,
        classes: 'table-user',
    },
    {
        Header: 'Phone',
        accessor: 'phone',
        sort: false,
    },
    {
        Header: 'Email',
        accessor: 'email',
        sort: false,
    },
    {
        Header: 'Location',
        accessor: 'location',
        sort: false,
    },
    {
        Header: 'Created On',
        accessor: 'created_on',
        sort: false,
    },
    {
        Header: 'Status',
        accessor: 'status',
        sort: false,
        Cell: StatusColumn,
    },
    {
        Header: 'Action',
        accessor: 'action',
        sort: false,
        classes: 'table-action',
        Cell: ActionColumn,
    },
];

const sizePerPageList = [
    {
        text: '10',
        value: 10,
    },
    {
        text: '25',
        value: 25,
    },
    {
        text: '50',
        value: 50,
    },
];

// main component
const Customers = (): React$Element<React$FragmentType> => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'eCommerce', path: '/apps/ecommerce/customers' },
                    { label: 'Customers', path: '/apps/ecommerce/customers', active: true },
                ]}
                title={'Customers'}
            />

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col sm={4}>
                                    <Button className="btn btn-danger mb-2">
                                        <i className="mdi mdi-plus-circle me-2"></i> Add Product
                                    </Button>
                                </Col>

                                <Col sm={8}>
                                    <div className="text-sm-end">
                                        <Button className="btn btn-success mb-2 me-1">
                                            <i className="mdi mdi-cog-outline"></i>
                                        </Button>

                                        <Button className="btn btn-light mb-2 me-1">Import</Button>

                                        <Button className="btn btn-light mb-2">Export</Button>
                                    </div>
                                </Col>
                            </Row>

                            <Table
                                columns={columns}
                                data={customers}
                                pageSize={10}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                                isSelectable={true}
                                isSearchable={true}
                                theadClass="table-light"
                                searchBoxClass="mt-2 mb-3"
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Customers;
