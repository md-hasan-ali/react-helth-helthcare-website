// Adding necessary file 
import React from 'react';
import Banner from '../Banner/Banner';
import EmergencyCall from '../EmarjancyCall/EmergencyCall';
import OurDoctor from '../OurDoctor/OurDoctor';
import Servicess from '../Servicess/Servicess';

// Home component 
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Servicess></Servicess>
            <OurDoctor></OurDoctor>
            <EmergencyCall></EmergencyCall>
        </div>
    );
};

export default Home;