// @flow
import React from 'react';
import { Row, Col, Card, Badge } from 'react-bootstrap';
import classNames from 'classnames';

// components
import PageTitle from '../../components/PageTitle';

const colors = [
    {
        name: 'Primary',
        color: 'primary',
    },
    {
        name: 'Secondary',
        color: 'secondary',
    },
    {
        name: 'Success',
        color: 'success',
    },
    {
        name: 'Danger',
        color: 'danger',
    },
    {
        name: 'Warning',
        color: 'warning',
    },
    {
        name: 'Info',
        color: 'info',
    },
    {
        name: 'Light',
        color: 'light',
    },
    {
        name: 'Dark',
        color: 'dark',
    },
];

const DefaultBadges = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Default</h4>
                <p className="text-muted font-14 mb-3">
                    A simple labeling component. Badges scale to match the size of the immediate parent element by using
                    relative font sizing and <code>em</code> units.
                </p>

                <h1>
                    h1.Example heading <span className="badge bg-secondary text-light">New</span>
                </h1>
                <h2>
                    h2.Example heading <span className="badge badge-success-lighten">New</span>
                </h2>
                <h3>
                    h3.Example heading{' '}
                    <button type="button" className="btn btn-sm btn-primary">
                        Notifications <span className="badge bg-light text-dark">4</span>
                    </button>
                </h3>
                <h4>
                    h4.Example heading{' '}
                    <a href="/" className="badge badge-info-lighten">
                        Info Link
                    </a>
                </h4>
                <h5>
                    h5.Example heading <span className="badge badge-outline-warning">New</span>
                </h5>
                <h6>
                    h6.Example heading <span className="badge bg-danger">New</span>
                </h6>
            </Card.Body>
        </Card>
    );
};

const ContexualBadges = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Contexual variations</h4>
                <p className="text-muted font-14 mb-3">
                    Add any of the below mentioned modifier classes to change the appearance of a badge. Badge can be
                    more contextual as well. Just use regular convention e.g. <code>badge-*color</code>,
                    <code>bg-primary</code> to have badge with different background.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Badge
                            className={classNames(
                                'me-1',
                                'badge bg-' + color.color,
                                color.color === 'light' ? 'text-dark' : null
                            )}
                            key={index}>
                            {color.name}
                        </Badge>
                    );
                })}

                <h5 className="mt-4">Lighten Badges</h5>
                <p className="text-muted font-14 mb-3">
                    Using the <code>.badge-*-lighten</code> modifier class, you can have more soften variation.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Badge className={classNames('me-1', 'badge badge-' + color.color + '-lighten')} key={index}>
                            {color.name}
                        </Badge>
                    );
                })}

                <h5 className="mt-4">Outline Badges</h5>
                <p className="text-muted font-14 mb-3">
                    Using the <code>.badge-outline-*</code> to quickly create a bordered badges.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Badge
                            color=""
                            className={classNames('me-1', 'badge badge-outline-' + color.color)}
                            key={index}>
                            {color.name}
                        </Badge>
                    );
                })}
            </Card.Body>
        </Card>
    );
};

const PillBadges = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Pill Badges</h4>
                <p className="text-muted font-14 mb-3">
                    Use the <code>.rounded-pill</code> modifier class to make badges more rounded.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Badge
                            pill
                            className={classNames(
                                'me-1',
                                'badge bg-' + color.color,
                                color.color === 'light' ? 'text-dark' : null
                            )}
                            key={index}>
                            {color.name}
                        </Badge>
                    );
                })}

                <h5 className="mt-4">Lighten Badges with Pill</h5>
                <p className="text-muted font-14 mb-3">
                    Use the <code>.badge-*-lighten</code> modifier class to make badges lighten.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Badge
                            pill
                            className={classNames('me-1', 'badge badge-' + color.color + '-lighten')}
                            key={index}>
                            {color.name}
                        </Badge>
                    );
                })}

                <h5 className="mt-4">Outline Badges</h5>
                <p className="text-muted font-14 mb-3">
                    Using the <code>.badge-outline-*</code> to quickly create a bordered badges.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Badge
                            color=""
                            pill
                            className={classNames('me-1', 'badge badge-outline-' + color.color)}
                            key={index}>
                            {color.name}
                        </Badge>
                    );
                })}
            </Card.Body>
        </Card>
    );
};

const Badges = (): React$Element<React$FragmentType> => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Base UI', path: '/ui/badges' },
                    { label: 'Badges', path: '/ui/badges', active: true },
                ]}
                title={'Badges'}
            />

            <Row>
                <Col lg={6}>
                    <DefaultBadges />
                    <PillBadges />
                </Col>

                <Col lg={6}>
                    <ContexualBadges />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Badges;
