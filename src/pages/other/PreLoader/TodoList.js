// @flow
import React, { useState } from 'react';
import { Row, Col, Card, Dropdown } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';

const TodoList = (): React$Element<React$FragmentType> => {
    const [todoData, setTodoData] = useState([
        {
            id: '1',
            text: 'Design One page theme',
            done: false,
        },
        {
            id: '2',
            text: 'Build a js based app',
            done: true,
        },
        {
            id: '3',
            text: 'Creating component page',
            done: true,
        },
        {
            id: '4',
            text: 'Testing??',
            done: true,
        },
        {
            id: '5',
            text: 'Hehe!! This looks cool!',
            done: false,
        },
        {
            id: '6',
            text: 'Create new version 3.0',
            done: false,
        },
        {
            id: '7',
            text: 'Build an angular app',
            done: true,
        },
    ]);

    /**
     * Toggle the status
     * @param todoItem todo item
     */
    const toggleTodo = (todoItem, index) => {
        const newTodoData = todoData.map((todo, i) => {
            return index === i ? Object.assign(todo, { done: !todoItem.done }) : todo;
        });
        setTodoData(newTodoData);
    };

    return (
        <>
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

                    <h4 className="header-title mb-2">Todo</h4>

                    <div className="todoapp">
                        <Row>
                            <Col>
                                <SimpleBar style={{ maxHeight: '224px', width: '100%' }}>
                                    <ul className="list-group list-group-flush todo-list" id="todo-list">
                                        {todoData.map((todo, index) => {
                                            return (
                                                <li key={index} className="list-group-item border-0 ps-0">
                                                    {todo.done ? (
                                                        <div className="form-check mb-0">
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input todo-done"
                                                                id={todo.id}
                                                                checked={todo.done}
                                                                onChange={() => toggleTodo(todo, index)}
                                                            />
                                                            <label className="form-check-label" htmlFor={todo.id}>
                                                                <s>{todo.text}</s>
                                                            </label>
                                                        </div>
                                                    ) : (
                                                        <div className="form-check mb-0">
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input todo-done"
                                                                id={todo.id}
                                                                checked={todo.done}
                                                                onChange={() => toggleTodo(todo, index)}
                                                            />
                                                            <label className="form-check-label" htmlFor={todo.id}>
                                                                {todo.text}
                                                            </label>
                                                        </div>
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </SimpleBar>
                            </Col>
                        </Row>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default TodoList;
