import React from 'react';
import { Container,Navbar,Nav,Image } from 'react-bootstrap';
import logo from '../../Images/logo.png';

const UpperNavBar = () => {
    return (
        <div className="header-navbar">
            <Navbar expand="lg" className="pt-3 pb-3">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image src={logo}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Web Development</Nav.Link>
                        <Nav.Link href="#home">Robotic Development</Nav.Link>
                        <Nav.Link href="#link">Ui/Ux Design</Nav.Link>                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default UpperNavBar;