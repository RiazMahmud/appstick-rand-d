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
                                <li>Basic Concept of Computer and Internet </li>                                
                            </ul>
                        </div>
                    </div>
                    <div className="mt-5 mb-5">
                        <h2>Responsibilities</h2>
                        <div className="mt-4">
                            <ul>
                                <li>Need to attend every class. </li>
                                <li>Need to participate project task</li>
                                <li>Good Communication skills, both written and verbal</li>
                                <li>document and test developed software applications </li>
                                <li>Should work part time </li> 
                            </ul>
                        </div>
                    </div>
                </Col>
            </Container>
        </div>
    );
};

export default RequirementResponsiblity;