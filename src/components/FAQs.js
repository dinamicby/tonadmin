// @flow
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

type FAQsProps = {
    rawFaqs: {
        id: number,
        question: string,
        answer: string,
        titleClass?: string,
        textClass?: string,
    }[],
};
/*
 * FAQs
 */
const FAQs = (props: FAQsProps): React$Element<any> => {
    return (
        <React.Fragment>
            <Row className="pt-5">
                {props.rawFaqs.map((ques, index) => {
                    return ques.id % 2 !== 0 ? (
                        <Col key={index} lg={5} className="offset-lg-1">
                            <div>
                                <div className="faq-question-q-box">Q.</div>
                                <h4 className={classNames('faq-question', ques.titleClass)}>{ques.question}</h4>
                                <p className={classNames('faq-answer mb-4', ques.textClass)}>{ques.answer}</p>
                            </div>
                        </Col>
                    ) : (
                        <Col key={index} lg={5}>
                            <div>
                                <div className="faq-question-q-box">Q.</div>
                                <h4 className={classNames('faq-question', ques.titleClass)}>{ques.question}</h4>
                                <p className={classNames('faq-answer mb-4', ques.textClass)}>{ques.answer}</p>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </React.Fragment>
    );
};

export default FAQs;
