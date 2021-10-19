import React from 'react';
import Banner from '../Banner/Banner';
import OurDoctor from '../OurDoctor/OurDoctor';
import Servicess from '../Servicess/Servicess';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Servicess></Servicess>
            <OurDoctor></OurDoctor>
        </div>
    );
};

export default Home;