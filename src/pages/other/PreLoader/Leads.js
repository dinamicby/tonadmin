// @flow
import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';

import avatar1 from '../../../assets/images/users/avatar-1.jpg';
import avatar2 from '../../../assets/images/users/avatar-2.jpg';
import avatar3 from '../../../assets/images/users/avatar-3.jpg';
import avatar4 from '../../../assets/images/users/avatar-4.jpg';
import avatar5 from '../../../assets/images/users/avatar-5.jpg';
import avatar6 from '../../../assets/images/users/avatar-6.jpg';

const Leads = (): React$Element<any> => {
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

                <h4 className="header-title mb-4">Recent Leads</h4>

                <div className="d-flex align-items-start">
                    <img className="me-3 rounded-circle" src={avatar2} width="40" alt="Generic placeholder" />
                    <div className="w-100 overflow-hidden">
                        <span className="badge badge-warning-lighten float-end">Cold lead</span>
                        <h5 className="mt-0 mb-1">Risa Pearson</h5>
                        <span className="font-13">richard.john@mail.com</span>
                    </div>
                </div>

                <div className="d-flex align-items-start mt-3">
                    <img className="me-3 rounded-circle" src={avatar3} width="40" alt="Generic placeholder" />
                    <div className="w-100 overflow-hidden">
                        <span className="badge badge-danger-lighten float-end">Lost lead</span>
                        <h5 className="mt-0 mb-1">Margaret D. Evans</h5>
                        <span className="font-13">margaret.evans@rhyta.com</span>
                    </div>
                </div>

                <div className="d-flex align-items-start mt-3">
                    <img className="me-3 rounded-circle" src={avatar4} width="40" alt="Generic placeholder" />
                    <div className="w-100 overflow-hidden">
                        <span className="badge badge-success-lighten float-end">Won lead</span>
                        <h5 className="mt-0 mb-1">Bryan J. Luellen</h5>
                        <span className="font-13">bryuellen@dayrep.com</span>
                    </div>
                </div>

                <div className="d-flex align-items-start mt-3">
                    <img className="me-3 rounded-circle" src={avatar5} width="40" alt="Generic placeholder" />
                    <div className="w-100 overflow-hidden">
                        <span className="badge badge-warning-lighten float-end">Cold lead</span>
                        <h5 className="mt-0 mb-1">Kathryn S. Collier</h5>
                        <span className="font-13">collier@jourrapide.com</span>
                    </div>
                </div>

                <div className="d-flex align-items-start mt-3">
                    <img className="me-3 rounded-circle" src={avatar1} width="40" alt="Generic placeholder" />
                    <div className="w-100 overflow-hidden">
                        <span className="badge badge-warning-lighten float-end">Cold lead</span>
                        <h5 className="mt-0 mb-1">Timothy Kauper</h5>
                        <span className="font-13">thykauper@rhyta.com</span>
                    </div>
                </div>

                <div className="d-flex align-items-start mt-3">
                    <img className="me-3 rounded-circle" src={avatar6} width="40" alt="Generic placeholder" />
                    <div className="w-100 overflow-hidden">
                        <span className="badge badge-success-lighten float-end">Won lead</span>
                        <h5 className="mt-0 mb-1">Zara Raws</h5>
                        <span className="font-13">austin@dayrep.com</span>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Leads;
