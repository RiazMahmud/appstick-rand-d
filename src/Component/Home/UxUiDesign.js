import React from 'react';
import { Card, Col, Container, Row ,Button} from 'react-bootstrap';
import UpperNavBar from '../UpperNavBar/UpperNavBar';
import UXUiMiddleTab from '../UxUiMiddleTab/MiddleTab';
import UxUiSidePart from '../SidePart/UxUISidePart';
import uxui from '../../Images/uxui(1).png'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const UxUiDesign = () => {
    return (
        <div>
            <div>
                <UpperNavBar/> 
            </div>
            <div className="uxui-header-back-img">
                <div className="header-inside-content">
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <Card style={{ width: '18rem' }} >
                                    <Card.Img variant="top" src={uxui} />
                                    <Card.Body className="text-center">
                                        <Card.Title>
                                            <div className="d-flex ms-5">
                                                <h6 className="text-secondary ms-1">Seats Available:</h6>
                                                <h6 style={{fontWeight:'600', color: '#000'}}>16</h6>
                                            </div> 
                                        </Card.Title>                                        
                                        <Link to="/register" style={{textDecoration:'none',color:'#fff'}}>                                       
                                            <Button variant="outline-primary">Onsite Class</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <h1 className="header-text-middle mt-4">Diploma In UI Design</h1>
                            </Col>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <div className="header-button-part">                                    
                                    <Link to="/register" style={{textDecoration:'none',color:'#fff'}}>
                                        <button className="log-in-btn">REGISTRATION</button>
                                    </Link>    
                                </div>                                
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="middle-content">
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col lg={4} md={4} sm={12} xs={12}>
                               <UxUiSidePart/>
                            </Col>
                            <Col lg={8} md={8} sm={12} xs={12}>
                                <div className="uxui-middle-tab-content">
                                    <UXUiMiddleTab/>
                                </div>                                
                            </Col>
                        </Row>
                    </Container>             
                </div>
                <div className="footer"><Footer/></div>                
            </div>
        </div>
    );
};

export default UxUiDesign;