import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './services.css'

const Servicess = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='services-area'>
            <Container className='py-5'>
                <h2 className='text-center pb-4'>Our <span className='text-style'>Servicess</span></h2>
                <Row xs={1} md={3} className="g-4">
                    {
                        services?.map(service => <Service
                            key={service.key}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Servicess;