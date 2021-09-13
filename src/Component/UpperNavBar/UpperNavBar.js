import React from 'react';
import { Container,Navbar,Nav,Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                        <Nav.Link href="#link"><Link to="/web-development" style={{textDecoration:'none',color:'#262626'}}>Web Development</Link></Nav.Link>
                        <Nav.Link href="#home"><Link to="/game-development" style={{textDecoration:'none',color:'#262626'}}>Game Development</Link></Nav.Link>
                        <Nav.Link href="#link"><Link to="/ui-ux-design" style={{textDecoration:'none',color:'#262626'}}>UI/UX Design</Link></Nav.Link>                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default UpperNavBar;