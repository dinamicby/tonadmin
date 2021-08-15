// @flow
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import classNames from 'classnames';

type ChecklistsItems = {
    id: number,
    title: string,
    completed: boolean,
};

type AttachmentsItems = {
    id: number,
    filename: string,
    size: string,
};

type CommentsItems = {
    id: number,
    author: string,
    text: string,
    posted_on: string,
    author_avatar: string,
};

type TaskProps = {
    id: number,
    title: string,
    assigned_to: string,
    assignee_avatar: string,
    due_date: string,
    completed: boolean,
    priority: string,
    stage: string,
    checklists: Array<ChecklistsItems>,
    description: string,
    attachments: Array<AttachmentsItems>,
    comments: Array<CommentsItems>,
};

const createMarkup = (text) => {
    return { __html: text };
};

const Task = (task: TaskProps): React$Element<React$FragmentType> => {
    const [completed, setCompleted] = useState(task.stage === 'Done');

    /*
     * mark completd on selected task
     */
    const markCompleted = (e) => setCompleted(e.target.checked);

    return (
        <React.Fragment>
            <Card>
                <Card.Body>
                    <Dropdown className="card-widgets" align="end">
                        <Dropdown.Toggle variant="link" className="card-drop arrow-none cursor-pointer p-0 shadow-none">
                            <i className="uil uil-ellipsis-h"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <i className="uil uil-file-upload me-1"></i>Attachment
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <i className="uil uil-edit me-1"></i>Edit
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <i className="uil uil-file-copy-alt me-1"></i>Mark as Duplicate
                            </Dropdown.Item>
                            <Dropdown.Item divider />
                            <Dropdown.Item className="text-danger">
                                <i className="uil uil-trash-alt me-1"></i>Delete
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <div className="form-check float-start">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="completedCheck"
                            checked={completed}
                            onChange={markCompleted}
                        />
                        <label className="form-check-label" htmlFor="completedCheck">
                            Mark as completed
                        </label>
                    </div>

                    <hr className="mt-4 mb-2" />

                    <Row>
                        <Col>
                            <h4>{task.title}</h4>

                            <Row>
                                <Col>
                                    <p className="mt-2 mb-1 text-muted">Assigned To</p>
                                    <div className="d-flex">
                                        <img
                                            src={task.assignee_avatar}
                                            alt={task.assigned_to}
                                            className="rounded-circle me-2"
                                            height="24"
                                        />
                                        <div>
                                            <h5 className="mt-1 font-14">{task.assigned_to}</h5>
                                        </div>
                                    </div>
                                </Col>

                                <Col>
                                    <p className="mt-2 mb-1 text-muted">Due Date</p>
                                    <div className="d-flex">
                                        <i className="uil uil-schedule font-18 text-success me-1"></i>
                                        <div>
                                            <h5 className="mt-1 font-14">{task.due_date}</h5>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <div className="row mt-3">
                                <div className="col">
                                    <div id="taskDesk" dangerouslySetInnerHTML={createMarkup(task.description)}></div>
                                </div>
                            </div>

                            <h5 className="mt-4 mb-2 font-16">Checklists/Sub-tasks</h5>

                            {/* checklists */}
                            {task.checklists.map((checklist, index) => (
                                <div className="form-check mt-1" key={index}>
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id={`checklist-${checklist.id}`}
                                        defaultChecked={checklist.completed}
                                    />
                                    <label
                                        className={classNames('form-check-label', {
                                            strikethrough: checklist.completed,
                                        })}
                                        htmlFor={`checklist-${checklist.id}`}>
                                        {checklist.title}
                                    </label>
                                </div>
                            ))}

                            <h5 className="mt-4 mb-2 font-16">Attachments</h5>

                            {/* attachments */}
                            {task.attachments.map((f, index) => {
                                const ext = f.filename.substr(f.filename.lastIndexOf('.') + 1);
                                return (
                                    <Card key={index} className="mb-2 shadow-none border">
                                        <div className="p-1">
                                            <Row className="align-items-center">
                                                <Col className="col-auto">
                                                    <div className="avatar-sm">
                                                        <span className="avatar-title rounded">.{ext}</span>
                                                    </div>
                                                </Col>
                                                <Col className="ps-0">
                                                    <Link to="#" className="text-muted fw-bold">
                                                        {f.filename}
                                                    </Link>
                                                    <p className="mb-0">{f.size}</p>
                                                </Col>
                                                <Col className="col-auto">
                                                    <OverlayTrigger
                                                        placement="left"
                                                        overlay={<Tooltip>Download</Tooltip>}>
                                                        <Link
                                                            to="#"
                                                            id="btn-download"
                                                            className="btn btn-link text-muted btn-lg p-0 me-1">
                                                            <i className="uil uil-cloud-download"></i>
                                                        </Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger
                                                        placement="left"
                                                        overlay={<Tooltip>Delete</Tooltip>}>
                                                        <Link
                                                            to="#"
                                                            id="btn-Delete"
                                                            className="btn btn-link text-danger btn-lg p-0">
                                                            <i className="uil uil-multiply"></i>
                                                        </Link>
                                                    </OverlayTrigger>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card>
                                );
                            })}

                            <div className="row mt-3">
                                <div className="col">
                                    <h5 className="mb-2 font-16">Comments</h5>

                                    {/* comments */}
                                    {task.comments.map((comment, idx) => (
                                        <React.Fragment key={idx}>
                                            <div key={idx} className="d-flex mt-3 p-1">
                                                <img
                                                    src={comment.author_avatar}
                                                    className="me-2 rounded-circle"
                                                    height="36"
                                                    alt={comment.author}
                                                />
                                                <div className="w-100">
                                                    <h5 className="mt-0 mb-0">
                                                        <span className="float-end text-muted font-12">
                                                            {comment.posted_on}
                                                        </span>
                                                        {comment.author}
                                                    </h5>
                                                    <p className="mt-1 mb-0 text-muted">{comment.text}</p>
                                                </div>
                                            </div>
                                            <hr />
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            {/* add comments */}
                            <Row className="mt-2">
                                <Col>
                                    <div className="border rounded">
                                        <form action="#" className="comment-area-box">
                                            <textarea
                                                rows="3"
                                                className="form-control border-0 resize-none"
                                                placeholder="Your comment..."></textarea>
                                            <div className="p-2 bg-light">
                                                <div className="float-end">
                                                    <button type="submit" className="btn btn-sm btn-success">
                                                        <i className="uil uil-message me-1"></i>Submit
                                                    </button>
                                                </div>
                                                <div>
                                                    <Link to="#" className="btn btn-sm px-1 btn-light">
                                                        <i className="uil uil-cloud-upload"></i>
                                                    </Link>
                                                    <Link to="#" className="btn btn-sm px-1 btn-light">
                                                        <i className="uil uil-at"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default Task;
