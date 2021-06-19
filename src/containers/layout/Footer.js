import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <Container>
        <Row className="justify-content-end">
          <Col sm="6" className="text-end">
            All rights reserved <Link to={{pathname: 'https://github.com/yogen-pokhrel'}} target="_blank" className="text-light" >Yogen Pokhrel </Link>
          </Col>
        </Row>
      </Container>
    )
}

export default Footer