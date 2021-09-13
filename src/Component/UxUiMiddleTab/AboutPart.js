import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Figmalandingpage1 from '../../Images/Figma Landing Page photo/Figma_landing page1.png';
import Figmalandingpage2 from '../../Images/Figma Landing Page photo/Figma_landing page2.png';

const AboutPart = () => {
    return (
        <div className="about-main">
            <Container fluid>
                <div className="about-header-text2">
                  <h2 className="text2-h1">UI Design</h2>
                  <p className="about-header-text1">User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. Designers aim to create interfaces which users find easy to use and pleasurable. UI design refers to graphical user interfaces and other forms — e.g., Voice-controlled interfaces.
                  </p>
                </div>                
                <div className="about-middle-part1">
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <Image className="about-middle-img1" src={Figmalandingpage1} />
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className="about-middle-text1">
                                <h4 className="about-middle-text1-h2">Why Should You Learn UI Design?</h4>
                                <p>
                                <strong> creative job you will love:</strong> UI is a satisfying job if you're curious about human behavior and passionate about
                                how design shapes the products and experiences around you. UI design was rated in Career Karma's top 25 tech jobs in 2021.</p>
                                <p>
                                <strong>High demand means high pay:</strong> Employers struggle to find qualified UI designers and the demand keeps growing. 
                                The average UX designer salary in the United States is $83,623—though that will vary depending on seniority and location.    
                                </p>
                                <p>
                                <strong>A flexible career path:</strong> As a UI designer, you will have the opportunity to work for startups,
                                 agencies, large corporates, on a freelance basis, or even remotely.
                                </p>
                            </div>                            
                        </Col>
                    </Row>
                </div>
                <div className="about-middle-part2">
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className="about-middle-text2">
                                <h4 className="about-middle-text2-h2">What is your benefit ?</h4>
                                <p>
                                You will get an official environment along with team collaboration. 
                                This course brings you to Beginner to Advance level by creating the complete
                                User Interface Design Project. You will be able to understand how to complete one project,
                                how to solve the project, how to collaborate with teams, how to get freelance work and how to
                                complete that and delivery process. This complete course will help you to get a job/freelance
                                project with this new skill. You will be able to start work for your client. You will also get
                                a chance to be hired in our software firm by approving a real project.
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <Image className="about-middle-img2" src={Figmalandingpage2} />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default AboutPart;