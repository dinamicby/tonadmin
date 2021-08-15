// @flow
import React from 'react';
import { Card, Dropdown, Table } from 'react-bootstrap';

const Performers = (): React$Element<any> => {
    return (
        <Card>
            <Card.Body>
                <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle variant="link" className="arrow-none card-drop p-0 shadow-none">
                        <i className="mdi mdi-dots-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <h4 className="header-title mb-3">Top Performing</h4>

                <Table hover responsive className="table table-striped table-sm table-centered mb-0 table-nowrap">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Leads</th>
                            <th>Deals</th>
                            <th>Tasks</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h5 className="font-15 mb-1 fw-normal">Jeremy Young</h5>
                                <span className="text-muted font-13">Senior Sales Executive</span>
                            </td>
                            <td>187</td>
                            <td>154</td>
                            <td>49</td>
                            <td className="table-action">
                                <a href="/" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-eye"></i>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="font-15 mb-1 fw-normal">Thomas Krueger</h5>
                                <span className="text-muted font-13">Senior Sales Executive</span>
                            </td>
                            <td>235</td>
                            <td>127</td>
                            <td>83</td>
                            <td className="table-action">
                                <a href="/" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-eye"></i>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="font-15 mb-1 fw-normal">Pete Burdine</h5>
                                <span className="text-muted font-13">Senior Sales Executive</span>
                            </td>
                            <td>365</td>
                            <td>148</td>
                            <td>62</td>
                            <td className="table-action">
                                <a href="/" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-eye"></i>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="font-15 mb-1 fw-normal">Mary Nelson</h5>
                                <span className="text-muted font-13">Senior Sales Executive</span>
                            </td>
                            <td>753</td>
                            <td>159</td>
                            <td>258</td>
                            <td className="table-action">
                                <a href="/" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-eye"></i>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="font-15 mb-1 fw-normal">Kevin Grove</h5>
                                <span className="text-muted font-13">Senior Sales Executive</span>
                            </td>
                            <td>458</td>
                            <td>126</td>
                            <td>73</td>
                            <td className="table-action">
                                <a href="/" className="action-icon">
                                    {' '}
                                    <i className="mdi mdi-eye"></i>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default Performers;
