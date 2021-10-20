// Adding necessary file 
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './footer.css'
import footer from '../../images/9.png'

// Footer Component 
const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row xs={1} md={3}>
                    <Col>
                        <h4>Allfa Diagonstic Center..</h4>
                        <p>Phone: 621485215</p>
                        <address>570/360 House,Uttra, Dhaka 1241</address>
                    </Col>
                    <Col>
                        <img src={footer} alt="" />
                    </Col>
                    <Col>
                        <div className='footer-menu'>
                            <h4>Footer Menu</h4>
                            <Link to="/home">Home</Link>
                            <Link to="/features">Features</Link>
                            <Link to="/pricing">Pricing</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;