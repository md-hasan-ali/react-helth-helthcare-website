// adding necessary file
import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../../images/9.png'

// About us component
const AboutUs = () => {
    return (
        <div className='about-area py-4'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="about-content">
                            <h2 className='mb-3'>Your faithful partners Medical Goods</h2>
                            <li>Better security for patient privacy and information.</li>
                            <li>More products at lower prices.</li>
                            <li>connect customers with the power of eCommerce at all.</li>
                            <li>More products at lower prices.</li>
                            <li>connect customers with the power of eCommerce at all.</li>
                            <Link to='/contact' className='btn btn-success mt-3'>Contact Us</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-img">
                            <img className='img-fluid' src={aboutImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;