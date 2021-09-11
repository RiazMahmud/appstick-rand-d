import React from 'react';
import { Col, Container } from 'react-bootstrap';

const Address = () => {
    return (
        <div className="address-main">
            <Container fluid>
                <Col>
                    <div className="mt-5 mb-5">
                        <h1>Address</h1>
                        <div className="mt-3 mb-3 ms-5">
                            <h5><strong>Appstick</strong></h5>
                            <h6> 50 Outer Bypass Road, Khulna 9000</h6>
                            <h6>Phone:  01404-049797</h6>
                            <h6>Email: info@appstick.com.bd</h6>
                        </div>
                    </div>
                    <div className="map-responsive">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.777671770402!2d89.52782991542132!3d22.84771362857305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9af2c6f64491%3A0xd29e3260eac2a52c!2s50%20Outer%20Bypass%20Rd%2C%20Khulna!5e0!3m2!1sen!2sbd!4v1631334487284!5m2!1sen!2sbd" width="600" height="450" className="google-map" allowfullscreen="" loading="lazy"></iframe>                        
                    </div>
                </Col>
            </Container>
        </div>
    );
};

export default Address;