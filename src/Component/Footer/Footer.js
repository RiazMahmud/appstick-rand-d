import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo2 from '../../Images/logo2.png';
import MarkunreadOutlinedIcon from '@material-ui/icons/MarkunreadOutlined';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

const Footer = () => {
    return (
        <div className="footer-main" style={{backgroundColor:''}}>
            <Container>
                <div className="footer-inside">
                    <Row className="justify-content-md-center">
                        <Col lg={6} md={6}>
                            <div className="left-content">
                                <img src={logo2} />
                                <p style={{color: 'rgb(214, 202, 202)',marginTop:'20px',textAlign:'justify'}}>AppStick is a software development company providing software development and technical services such as: Web Design and Development, Game Development, Android Apps, Technical Support and so on. We are committed to our work by organized, disciplined and working plans that are the reason of our success within short time. We believe that Appstick will be able to serve and give supports to its clients for a long time.</p>
                            </div>
                        </Col>
                        <Col lg={1} md={1}></Col>
                        <Col lg={5} md={5}>
                            <div className="right-content">
                                <h5 style={{color:"white",fontWeight:'700',paddingTop: '30px'}}>Contact</h5>
                                <div style={{color:"rgb(214, 202, 202)",marginTop:'20px'}}>                                    
                                    <div className="d-flex">
                                        <MarkunreadOutlinedIcon/>
                                        <h6 className="contact-info">info@appstick.com.bd</h6>
                                    </div>
                                    <div className="d-flex">
                                        <PhoneInTalkOutlinedIcon/>
                                        <h6 className="contact-info">+880 1404 049 797</h6>
                                    </div>
                                    <div className="d-flex">
                                        <LocationOnOutlinedIcon/>
                                        <h6 className="contact-info">House #162, Road #11, Sonadanga Residential, Khulna, Bangladesh</h6>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div style={{textAlign: 'center',color:'gray', paddingBottom:'20px'}}>
                <p>Copyright © 2021 <span style={{color:"blue"}}>Appstick</span> All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;