// Adding necessary file 
import React from 'react';
import './emergency.css'
import img from '../../images/doctor3-removebg-preview.png'

// Emergency call component 
const EmergencyCall = () => {
    return (
        <div className='emergency-call'>
            <div className="container">
                <h2 className='text-center mb-4'>For <span className='text-style'>Emergency</span> Service</h2>
                <div className="row">
                    <div className="col-md-7">
                        <div className="emergency-content text-center mt-5">
                            <h4><i className="fas fa-blender-phone"></i></h4>
                            <span>YOU WANT TO DISCUSS WITH OUR DOCTOR</span>
                            <h2>Call Us Our Doctor For Any Emergency Help</h2>
                            <div className="TelePhone">
                                <h3>2551-2516-2514</h3>
                            </div>
                            <button className='btn btn-danger'>Contact Us!</button>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className='calltoaction-img'>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmergencyCall;