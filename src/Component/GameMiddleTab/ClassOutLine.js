import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ClassOutLineFakeData from './ClassOutLineFakeData';

const ClassOutLine = () => {
    
    return (
        <div>
            <Container>
                <Col>
                    <div>
                        <Row>
                            {
                              ClassOutLineFakeData.map(single => 
                                <Col lg={6} md={6}>
                                    <h6 style={{fontWeight: 'bold',borderBottom:'1px solid gray'}}>{single.header}</h6>
                                    <ul>
                                        {single.list.map(singleList => 
                                            <li>{singleList}</li>
                                        )}
                                    </ul>
                                </Col>   
                              )  
                            }
                                                        
                        </Row>
                    </div>
                </Col>
            </Container>
        </div>
    );
};

export default ClassOutLine;