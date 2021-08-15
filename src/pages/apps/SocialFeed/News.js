// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Dropdown } from 'react-bootstrap';

const News = (): React$Element<React$FragmentType> => {
    const news = [
        {
            id: 1,
            title: 'Golden Globes',
            description: 'The 27 Best moments from the Golden Globe Awards',
        },
        {
            id: 2,
            title: 'World Cricket',
            description: 'India has won ICC T20 World Cup Yesterday',
        },
        {
            id: 3,
            title: 'Antartica',
            description: 'Metling of Totten Glacier could cause high risk to areas near by sea',
        },
    ];

    return (
        <>
            <Card>
                <Card.Body>
                    <Dropdown className="float-end" align="end">
                        <Dropdown.Toggle variant="link" className="card-drop arrow-none cursor-pointer p-0 shadow-none">
                            <i className="mdi mdi-dots-horizontal"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>Today</Dropdown.Item>
                            <Dropdown.Item>Yesterday</Dropdown.Item>
                            <Dropdown.Item>Last Week</Dropdown.Item>
                            <Dropdown.Item>Last Month</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <h4 className="header-title mb-1">Trending</h4>

                    {news.map((item, index) => {
                        return (
                            <div key={index} className="d-flex mt-3">
                                <i className="uil uil-arrow-growth me-2 font-18 text-primary"></i>
                                <div>
                                    <Link className="mt-1 font-14" to="#">
                                        <strong>{item.title}:</strong>
                                        <span className="text-muted">{item.description}</span>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </Card.Body>
            </Card>
        </>
    );
};

export default News;
