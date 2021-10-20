// adding necessary file 
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import errorImg from '../../images/notfound.png'
import './notfound.css'

// PageNotFound component 
const PageNotFound = () => {
    const history = useHistory();

    const backToHome = () => {
        history.push('/')
    }
    return (
        <>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        <div className='error-page pb-4'>
                            <img src={errorImg} alt="" />
                            <button onClick={backToHome} className='btn btn-danger mb-5 mt-3'>Back To HomePage</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default PageNotFound;