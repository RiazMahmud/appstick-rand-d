import React from 'react';
import { Card, Col, Container, Row ,Button} from 'react-bootstrap';
import UpperNavBar from '../UpperNavBar/UpperNavBar';
import GameMiddleTab from '../GameMiddleTab/MiddleTab';
import GameSidePart from '../SidePart/GameSidePart';
import game from '../../Images/game.png';
import { Link } from 'react-router-dom';

const GameDevelopment = () => {
    return (
        <div>
            <div>
                <UpperNavBar/> 
            </div>
            <div className="game-header-back-img">
                <div className="header-inside-content">
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <Card style={{ width: '18rem' }} >
                                    <Card.Img variant="top" src={game} />
                                    <Card.Body className="text-center">
                                        <Card.Title>
                                            <div className="d-flex ms-5">
                                                <h6 className="text-secondary ms-1">Seats Available :</h6>
                                                <h6>19</h6>
                                            </div> 
                                        </Card.Title>                                        
                                        <Button variant="outline-primary">Onsite</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <h1 className="header-text-middle">Game Class</h1>
                            </Col>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <div className="header-button-part">
                                    <div className="text-default-part">
                                        <h2>₹25</h2>
                                    </div>
                                    <Link to="/register" style={{textDecoration:'none',color:'#fff'}}>
                                        <button className="log-in-btn">REGISTRATION FORM</button>
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
                               <GameSidePart/>
                            </Col>
                            <Col lg={8} md={8} sm={12} xs={12}>
                                <div className="game-middle-tab-content">
                                    <GameMiddleTab/>
                                </div>                                
                            </Col>
                        </Row>
                    </Container>             
                </div>                
            </div>
        </div>
    );
};

export default GameDevelopment;