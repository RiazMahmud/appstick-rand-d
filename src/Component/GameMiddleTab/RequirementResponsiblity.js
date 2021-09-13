import React from 'react';
import { Col, Container } from 'react-bootstrap';

const RequirementResponsiblity = () => {
    return (
        <div className="requirement-main">
            <Container>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <div className="mt-5">
                        <h2>Requirements</h2>
                        <div className="mt-4">
                            <ul>
                                <li>Basic concept on any kind of IDE</li>
                                <li>Basic concept on C++</li>
                                <li>Basic concept on Mathematics and Physics</li>
                                <li>Problem solving skills</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-5 mb-5">
                        <h2>Responsibilities</h2>
                        <div className="mt-4">
                            <ul>
                                <li>Excellent communication skills, both written and verbal</li>
                                <li>Should work part time (a maximum of 12 hours/week)</li>
                                <li>ability to carry out instruction furnished in written, oral or diagram form</li>
                                <li>document and test developed software applications </li>
                                <li>Assess new application ideas </li> 
                            </ul>
                        </div>
                    </div>
                </Col>
            </Container>
        </div>
    );
};

export default RequirementResponsiblity;