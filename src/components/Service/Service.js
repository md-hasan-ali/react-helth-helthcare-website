// Adding necessary file
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './service.css'

// Service component 
const Service = (props) => {
    const { key, img, name, desc, price } = props.service;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title> <strong>Name </strong>: {name}</Card.Title>
                        <Card.Text>
                            <strong>Desc: </strong> {desc}
                        </Card.Text>
                        <p> <strong>Price</strong>: {price}</p>
                        <Link to={`/service/${key}`}>
                            <Button variant='danger'>Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;