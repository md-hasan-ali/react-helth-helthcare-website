// Adding necessary file 
import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import bannerIMg from '../../images/banner-images.png'
import './banner.css'

// Banner component 
const Banner = () => {
    return (
        <div className='banner-area'>
            <Container>
                <Row style={{ "alignItems": 'center' }}>
                    <Col sm={12} md={4} lg={4}>
                        <div className='banner-img'>
                            <img className='img-fluid' src={bannerIMg} alt="" />
                        </div>
                    </Col>
                    <Col sm={12} md={8} lg={8}>
                        <h1><span className='text-style'>Allfa Diagonstic</span> Center and Clinic.</h1>
                        <p className='description'>Alfa Diagnostic center is the most popular health services of Thakurgaon District.We can provide many services, such-as:- ECG Test , Diabetics Test , Blood Test, X-ray and many others options.</p>
                        <Button variant="danger">Contact Us</Button>{' '}
                        <Button variant="outline-danger">About Me!</Button>{' '}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;