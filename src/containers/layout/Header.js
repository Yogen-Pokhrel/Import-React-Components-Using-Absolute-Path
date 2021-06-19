import React from 'react';
import {Container, Row, Col,Navbar, Nav, NavDropdown} from 'react-bootstrap';

const handleSelect = (eventKey) => { alert("Hi")};
class Header extends React.Component{
    render(){
        return <Container>
                <Row className="gx-1">
                    <Col xs="12">
                    <Navbar bg="transparent"  expand="lg" variant="dark">
                    <Navbar.Brand href="/" className="bold-text text-lg">Importing Using Absolute Path</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                        <Nav.Link href="/" className="active">Home</Nav.Link>
                        <Nav.Link href="/contact">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                    </Col>
                </Row>
            </Container>
    }
}

export default Header;