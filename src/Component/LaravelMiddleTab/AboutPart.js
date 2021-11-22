import React from 'react';
import { Col, Container } from 'react-bootstrap';

const AboutPart = () => {
    return (
        <div className="about-main">
            <Container fluid>
            <Col lg={12} md={12} sm={12} xs={12}>
                <div className="about-header-text2">
                  <h2 className="text2-h1">LARAVEL</h2>
                  <p className="about-header-text1">Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony. Wikipedia 
                    Laravel has become one of the most popular PHP frameworks which is robust and easy to understand. Laravel reuses the existing components of different frameworks which helps in creating a web application. The web application thus designed is more structured and pragmatic.
                    Employers are asking for this skill for all web programming jobs and in this course we have put together all of them, to give you the best chance of landing that job; or taking it to the next level.</p>
                </div>
                <div className="about-header-text1">
                    <h4 className="text-dark"><strong>Why should we learn Laravel ?</strong></h4>
                    <div>
                        <ul>
                            <li>Laravel provides less code functionality</li>
                            <li>It's easy to learn</li>
                            <li>Making web applications faster</li>
                            <li>Configuration error and exception handling</li>
                            <li>Automation testing work.</li>
                            <li>URL Routing Configuration is very high in Laravel</li>
                            <li>Scheduling tasks configuration and management</li>
                            <li>It has a huge community</li>
                            <li>Unlimited resources</li>
                            <li>Most importantly it's very easy to get a job if you have Laravel skills</li>
                        </ul>
                    </div>        
                </div>
                </Col>                
                <div className="about-middle-part1">
                    <Col lg={12} md={12} sm={12} xs={12}>
                            <div className="about-middle-text1">
                                <h4 className="about-middle-text1-h2">Why is Laravel so popular? </h4>
                                <p className="text-secondary">
                                    Laravel is the best PHP development framework that you can use to create your website for optimal results.
                                    This framework integrates agility in web development, simple coding, and high levels of flexibility.
                                </p>
                                <p className="text-secondary">Besides, once you learn it, creating complex applications are easy to do, because thousands of other people have created code we can plug (packages) into our Laravel application to make it even better. </p>
                            </div>                            
                        </Col>
                    
                </div>
                <div className="about-middle-part2">
                    <Col lg={12} md={12} sm={12} xs={12}>
                            <div className="about-middle-text2">
                                <h4 className="about-middle-text2-h2">What is your benefit ?</h4>
                                <p className="text-secondary">
                                    First of all you will get an official environment along with team collaboration.
                                    This course brings you to Beginner to Advance level by creating the complete most advanced creative project.
                                    You will be able to understand how to complete one project, how to handle project bugs,
                                    how to collaborate with teams, Core structures of MVC. This complete project will help 
                                    you to get a job with this new skill. You will be able to start work for your client. 
                                    You will also get a chance to be hired in our software firm.
                                    Add this project in your portfolio and university assignment and most importantly 
                                    you will get our support within 24 hours.
                                </p>
                            </div>
                        </Col>                   
                </div>
            </Container>
        </div>
    );
};

export default AboutPart;