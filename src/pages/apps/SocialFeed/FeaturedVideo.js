// @flow
import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';

const FeaturedVideo = (): React$Element<React$FragmentType> => {
    return (
        <>
            <Card>
                <Card.Body>
                    <Dropdown className="float-end">
                        <Dropdown.Toggle variant="link" className="card-drop arrow-none cursor-pointer p-0 shadow-none">
                            <i className="mdi mdi-dots-horizontal"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu align="end">
                            <Dropdown.Item>Today</Dropdown.Item>
                            <Dropdown.Item>Yesterday</Dropdown.Item>
                            <Dropdown.Item>Last Week</Dropdown.Item>
                            <Dropdown.Item>Last Month</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <h4 className="header-title mb-1">Featured Video For You</h4>

                    <div className="mt-3">
                        <div className="ratio ratio-16x9">
                            <iframe
                                className="embed-responsive-item"
                                title="video"
                                src="https://www.youtube.com/embed/9_eqq0HlN9g?autohide=0&showinfo=0&controls=0"></iframe>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default FeaturedVideo;
