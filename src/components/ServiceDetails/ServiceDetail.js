import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);
    return (
        <div>
            <h2 className='text-center py-5'>this is sevices details</h2>
        </div>
    );
};

export default ServiceDetail;