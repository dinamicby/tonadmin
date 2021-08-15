// @flow
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import avatar1 from '../../../../assets/images/users/avatar-6.jpg';
import avatar2 from '../../../../assets/images/users/avatar-7.jpg';
import avatar3 from '../../../../assets/images/users/avatar-8.jpg';

const TeamMembers = (): React$Element<any> => {
    return (
        <>
            <h5>Team Members:</h5>
            <OverlayTrigger placement="top" overlay={<Tooltip>James Anderson</Tooltip>}>
                <a
                    href="/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Mat Helme"
                    className="d-inline-block me-1">
                    <img src={avatar3} className="rounded-circle img-thumbnail avatar-sm" alt="friend" />
                </a>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={<Tooltip>Mat Helme</Tooltip>}>
                <a
                    href="/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Michael Zenaty"
                    className="d-inline-block me-1">
                    <img src={avatar1} className="rounded-circle img-thumbnail avatar-sm" alt="friend" />
                </a>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={<Tooltip>Michael Zenaty</Tooltip>}>
                <a
                    href="/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="James Anderson"
                    className="d-inline-block">
                    <img src={avatar2} className="rounded-circle img-thumbnail avatar-sm" alt="friend" />
                </a>
            </OverlayTrigger>
        </>
    );
};

export default TeamMembers;
