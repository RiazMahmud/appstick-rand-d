import React from 'react';
import { Accordion, Col, Container } from 'react-bootstrap';

const Faqs = () => {
    return (
        <div>
            <Container>
                <Col>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><strong>Is the Course Online or Onsite based?</strong></Accordion.Header>
                            <Accordion.Body>
                                <p>The whole course is absolutely Onsite based. Every learner has to come to our workstation to enroll in the course.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><strong>How can I enroll in the course?</strong></Accordion.Header>
                            <Accordion.Body>
                                <p>Just fill out the registration form. Our concern will manage the rest of the things. </p>                        
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><strong>How to pay?</strong></Accordion.Header>
                            <Accordion.Body>
                                <p>You can pay in our official account or just let the things to our concern. </p>
                            </Accordion.Body>
                        </Accordion.Item>    
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><strong>Can I pay partially? </strong></Accordion.Header>
                            <Accordion.Body>       
                                <p>Yes, you can just pay 50% of the tuition fees to enroll in the course.</p>
                                <p>You will get a maximum of three installments to pay the rest of the payments.</p>
                            </Accordion.Body> 
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header><strong>Do I get any certificates? </strong></Accordion.Header>
                            <Accordion.Body>       
                                <p>Yes, Appstick will provide you related certificates after completion of the courses.</p>
                            </Accordion.Body> 
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header><strong>Do I get any job opportunities in Appstick? </strong></Accordion.Header>
                            <Accordion.Body>       
                                <p>Yes of course, we will extend our engagements day by day in software development industries, so we will have to recruit more employees. So, you have a great chance to join our teams.</p>
                            </Accordion.Body> 
                        </Accordion.Item>
                    </Accordion>    
                </Col>
            </Container>
        </div>
    );
};

export default Faqs;