import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const PageNotFound = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col className='text-center py-5 my-5'>
                        <h2>404</h2>
                        <p>Page not found !</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default PageNotFound;