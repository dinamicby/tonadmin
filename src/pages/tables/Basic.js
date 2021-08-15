// @flow
import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';

// dummy records
const records = [
    { id: 1, firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
    { id: 2, firstName: 'Jacob', lastName: 'Thornton', username: '@fat' },
    { id: 3, firstName: 'Dave', lastName: 'G', username: '@dave' },
    { id: 4, firstName: 'Nik', lastName: 'N', username: '@nikn' },
    { id: 5, firstName: 'Shreyu', lastName: 'Navadiya', username: '@sn' },
];

const BasicTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Basic example</h4>
                <p className="text-muted font-14 mb-4">
                    Just use <code>Table</code> element
                </p>

                <Table className="mb-0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.username}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

const InverseTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Inverse Table</h4>
                <p className="text-muted font-14 mb-4">
                    You can also invert the colors—with light text on dark backgrounds—by specifying <code>dark</code>{' '}
                    attribute
                </p>

                <Table className="mb-0" variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.username}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

const StripedRowsTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Striped Rows</h4>
                <p className="text-muted font-14 mb-4">
                    Add <code>striped</code> attribute to table
                </p>

                <Table className="mb-0" striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.username}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

const BorderedTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Bordered table</h4>
                <p className="text-muted font-14 mb-4">
                    Add <code>bordered</code> attribute for borders on all sides of the table and cells.
                </p>

                <Table className="mb-0" bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.username}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

const HoverableTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Hoverable Rows</h4>
                <p className="text-muted font-14 mb-4">
                    Add <code>hover</code> attribute to enable a hover state on table rows
                </p>

                <Table className="mb-0" hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.username}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

const SmallTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Small table</h4>
                <p className="text-muted font-14 mb-4">
                    Add <code>size="sm"</code> attribute to make tables more compact by cutting cell padding in half
                </p>

                <Table className="mb-0" size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.username}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

const ResponsiveTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Always responsive</h4>
                <p className="text-muted font-14 mb-4">
                    Across every breakpoint, use <code>responsive</code> attribute to create responsive tables
                </p>

                <Table className="mb-0" responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.username}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

const Tables = (): React$Element<React$FragmentType> => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Tables', path: '/ui/tables/basic' },
                    { label: 'Basic Tables', path: '/ui/tables/basic', active: true },
                ]}
                title={'Basic Tables'}
            />

            <Row>
                <Col xl={6}>
                    <BasicTable />
                </Col>

                <Col xl={6}>
                    <InverseTable />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <StripedRowsTable />
                </Col>

                <Col xl={6}>
                    <BorderedTable />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <HoverableTable />
                </Col>

                <Col xl={6}>
                    <SmallTable />
                </Col>
            </Row>

            <Row>
                <Col>
                    <ResponsiveTable />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Tables;
