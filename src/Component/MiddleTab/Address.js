import React from 'react';
import { Col, Container } from 'react-bootstrap';

const Address = () => {
    return (
        <div>
            <Container fluid>
                <Col>
                    <div>
                        <h2>Address</h2>
                        <div className="mt-3 mb-3 ms-5">
                            <h5>Appstick</h5>
                            <h6> 50 Outer Bypass Road, Khulna 9000</h6>
                            <h6>Phone:  01404-049797</h6>
                            <h6>Email: info@appstick.com.bd</h6>
                        </div>
                    </div>
                    <div className="mt-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d233667.8223908687!2d90.27923710646989!3d23.780887457084543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1618625004774!5m2!1sen!2sbd" width="680" height="490" allowFullscreen="" loading="lazy"></iframe>
                    </div>
                </Col>
            </Container>
        </div>
    );
};

export default Address;