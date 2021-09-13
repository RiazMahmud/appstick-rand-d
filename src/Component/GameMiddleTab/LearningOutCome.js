import React from 'react';
import { Col, Container} from 'react-bootstrap';

const LearningOutCome = () => {
    const list = [
        "Learn to build applications using Unreal Engine",
        "To install Unreal Engine using Windows and MAC",
        "You will learn how to use Unreal Engine",
        "You will learn how to use Trello Board, Slack",
        "An ability to design a game within realistic constraints such as economics, environmental, social, political, ethical, health and safety, manufacturability, and sustainability",
        "An ability to use development techniques, skills and tools necessary for games development practice",
        "An ability to design, validate, implement, and maintain games",
        "An ability to communicate effectively",
        "An understanding of professional and ethical responsibility",
        "An ability to design, validate, implement, and maintain games",
        "An ability to communicate effectively",
        "An ability to use development techniques, skills and tools necessary for games development practice",
        "And lots of more cool things"


    ];
    return (
        <div className="learningOutcome-main">
            <Container>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <div>
                        <h2 className="mt-2">Learning outcome</h2>
                        <p className="text-secondary mt-4 mb-4">
                            This course introduces the games development and elements of software engineering of games.
                            This includes a review of games development approaches and their applications. 
                            We will be concerned on three main topics: the determining and modelling of a game user,
                            software engineering of games for modern platforms, and game development and programming. 
                            As we told you will get an official environment along with team collaboration. 
                            This course brings you to Beginner to Advance level by creating the complete most advanced creative project.
                            You will be able to understand how to complete one project, how to handle project bugs, and how to collaborate with teams.
                            This complete project will help you to get a job with this new skill. You will be able to start work for your client.
                            You will also get a chance to be hired in our software firm. Add this project in your portfolio and university assignment and most importantly you will get our support within 24 hours.
                        </p>
                        <div>
                            <h5 className="text-bold mb-3"><b>Besides you will be able to understand the following things:</b></h5>
                            <ul style={{listStyleType: "square"}}>
                                {
                                    list.map((item, index) => 
                                        <li key={index}>{item}</li>
                                    )
                                }
                                
                            </ul>
                        </div>
                    </div>
                </Col>
            </Container>
        </div>
    );
};

export default LearningOutCome;