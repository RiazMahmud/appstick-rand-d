import React from 'react';
import { Col, Container} from 'react-bootstrap';

const LearningOutCome = () => {
    const list = [
        "Learn to build applications using laravel",
        "To install Laravel using Windows and MAC",
        "You will learn how to use Development Tools and Environments (IDE)",
        "You will learn how to use GIT",
        "You will learn how to use Trello Board, Slack",
        "You will learn how to use Laravel",
        "You will learn how to use Routes",
        "You will learn how to create and use Controllers and what they are",
        "You will learn how to create Views and what they are",
        "You will learn to use the Templating Engine Blade",
        "How to connect and use Databases (MySQL)",
        "How to create Migrations and what they are",
        "Database: Eloquent One to One - CRUD",
        "Database: Eloquent One to Many - CRUD",
        "Database: Eloquent Many to Many - CRUD",
        "Database: Eloquent Polymorphic - CRUD",
        "Form Validation",
        "You will learn to download third party libraries to add to Laravel",
        "You will learn to upload files",
        "You will learn about Middleware and security",
        "You will learn about sessions",
        "You will learn about sending emails",
        "You will learn Github or version control",
        "You will learn to create a BULK functionality that you can use the CRUD on it",
        "You will learn to deploy Laravel on shared hosting accounts, like hostinger (Using cPanel, SSH) And lots of more cool things",

    ];
    return (
        <div className="learningOutcome-main">
            <Container>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <div>
                        <h2 className="mt-2">Learning outcome</h2>
                        <p className="text-secondary mt-4 mb-4">As we told you will get an official environment along with team collaboration.
                             This course brings you to Beginner to Advance level by creating the complete 
                             most advanced creative project. You will be able to understand how to complete 
                             one project, how to handle project bugs, how to collaborate with teams, Core 
                             structures of MVC. This complete project will help you to get a job with this
                              new skill. You will be able to start work for your client. You will also get
                               a chance to be hired in our software firm. Add this project in your portfolio
                                and university assignment and most importantly you will get our support within 24 hours.
                        </p>
                        <div>
                            <h5 className="text-bold mb-3">Besides you will be able to understand the following things:</h5>
                            <ul>
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