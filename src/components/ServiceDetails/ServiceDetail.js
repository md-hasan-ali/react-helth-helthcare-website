// adding necessary file 
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

// ServiceDetail component 
const ServiceDetail = () => {
    const [services, setService] = useState([]);
    console.log(services)

    const serviceId = useParams();
    console.log(serviceId)

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <h2 className='text-center py-5'>this is sevices details</h2>
        </div>
    );
};

export default ServiceDetail;