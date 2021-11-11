// @flow
import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';

// components
import Timeline from '../../../components/Timeline';
import TimelineItem from '../../../components/TimelineItem';

const Activity = (): React$Element<any> => {
    return (
        <Card>
            <Card.Body>
                <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle variant="link" className="arrow-none card-drop p-0 shadow-none">
                        <i className="mdi mdi-dots-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Sales Report</Dropdown.Item>
                        <Dropdown.Item>Export Report</Dropdown.Item>
                        <Dropdown.Item>Profit</Dropdown.Item>
                        <Dropdown.Item>Action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <h4 className="header-title mb-2">Recent Activity</h4>

                <SimpleBar style={{ maxHeight: '419px', width: '100%' }}>
                    <Timeline>
                        <TimelineItem>
                            <i className="mdi mdi-upload bg-info-lighten text-info timeline-icon"></i>
                            <div className="timeline-item-info">
                                <a href="/" className="text-info fw-bold mb-1 d-block">
                                    You sold an item
                                </a>
                                <small>Paul Burgess just purchased “Hyper - Admin Dashboard”!</small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">5 minutes ago</small>
                                </p>
                            </div>
                        </TimelineItem>

                        <TimelineItem>
                            <i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"></i>
                            <div className="timeline-item-info">
                                <a href="/" className="text-primary fw-bold mb-1 d-block">
                                    Product on the Bootstrap Market
                                </a>
                                <small>
                                    Dave Gamache added <span className="fw-bold">Admin Dashboard</span>
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">30 minutes ago</small>
                                </p>
                            </div>
                        </TimelineItem>

                        <TimelineItem>
                            <i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon"></i>
                            <div className="timeline-item-info">
                                <a href="/" className="text-info fw-bold mb-1 d-block">
                                    Robert Delaney
                                </a>
                                <small>
                                    Send you message
                                    <span className="fw-bold">"Are you there?"</span>
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">2 hours ago</small>
                                </p>
                            </div>
                        </TimelineItem>

                        <TimelineItem>
                            <i className="mdi mdi-upload bg-primary-lighten text-primary timeline-icon"></i>
                            <div className="timeline-item-info">
                                <a href="/" className="text-primary fw-bold mb-1 d-block">
                                    Audrey Tobey
                                </a>
                                <small>
                                    Uploaded a photo <span className="fw-bold">"Error.jpg"</span>{' '}
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">14 hours ago</small>
                                </p>
                            </div>
                        </TimelineItem>
                        <TimelineItem>
                            <i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"></i>
                            <div className="timeline-item-info">
                                <a href="/" className="text-primary fw-bold mb-1 d-block">
                                    Product on the Bootstrap Market
                                </a>
                                <small>
                                    Dave Gamache added <span className="fw-bold">Admin Dashboard</span>
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">30 minutes ago</small>
                                </p>
                            </div>
                        </TimelineItem>

                        <TimelineItem>
                            <i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon"></i>
                            <div className="timeline-item-info">
                                <a href="/" className="text-info fw-bold mb-1 d-block">
                                    Robert Delaney
                                </a>
                                <small>
                                    Send you message
                                    <span className="fw-bold">"Are you there?"</span>
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">2 hours ago</small>
                                </p>
                            </div>
                        </TimelineItem>

                        <TimelineItem>
                            <i className="mdi mdi-upload bg-primary-lighten text-primary timeline-icon"></i>
                            <div className="timeline-item-info">
                                <a href="/" className="text-primary fw-bold mb-1 d-block">
                                    Audrey Tobey
                                </a>
                                <small>
                                    Uploaded a photo <span className="fw-bold">"Error.jpg"</span>{' '}
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">14 hours ago</small>
                                </p>
                            </div>
                        </TimelineItem>
                    </Timeline>
                </SimpleBar>
            </Card.Body>
        </Card>
    );
};

export default Activity;
