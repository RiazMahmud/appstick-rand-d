import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import cat2 from '../../Images/cat2.jpg';

const AboutPart = () => {
    return (
        <div className="about-main">
            <Container fluid>
                <div className="about-header-text1">
                    <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Proin vitae diam non nibh tincidunt pulvinar lacinia eu odio.
                       Suspendisse sit amet ullamcorper nibh. Vivamus cursus et velit 
                       sit amet facilisis. Proin convallis dolor eget ipsum cursus dignissim.
                    </p>
                </div>
                <div className="about-header-text2">
                  <h2 className="text2-h1">Requirements</h2>
                  <p className="about-header-text1">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.</p>
                </div>
                <div className="about-middle-part1">
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <Image className="about-middle-img1" src={cat2} />
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className="about-middle-text1">
                                <h2 className="about-middle-text1-h2">What am I going to get from this course?</h2>
                                <p className="text-secondary mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>                            
                        </Col>
                    </Row>
                </div>
                <div className="about-middle-part2">
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className="about-middle-text2">
                                <h2 className="about-middle-text2-h2">What am I going to get from this course?</h2>
                                <p className="text-secondary mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <Image className="about-middle-img2" src={cat2} />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default AboutPart;