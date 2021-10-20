// adding necessary file 
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './details.css'

// ServiceDetail component 
const ServiceDetail = () => {
    const [services, setService] = useState([]);
    console.log(services)

    const { seviceId } = useParams();

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const matchId = services.find(result => result.key == seviceId)
    console.log(matchId)
    // const { img, name, desc, price } = matchId

    return (
        <div>
            <div className="serviceDetails pb-5">
                <h2 className='text-center py-5'>this is sevices details</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <img width='50' src={matchId?.img} alt="" />
                            <h2>Name : {matchId?.name}</h2>
                            <h5>Name : {matchId?.desc}</h5>
                            <p>Name : {matchId?.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;