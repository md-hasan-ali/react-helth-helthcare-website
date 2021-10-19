import React from 'react';
import './doctor.css'
import doctor1 from '../../images/doctor1.jpg';
import doctor2 from '../../images/doctor2.jpg'
import doctor3 from '../../images/doctor3.jpg'
import doctor4 from '../../images/doctor4.jpg'


const OurDoctor = () => {
    return (
        <div className='doctor-area py-5'>
            <div className="container">
                <div className='text-center pb-4'>
                    <h2>Our Doctors</h2>
                    <p>We Provide best services</p>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="single-doctor">
                            <img src={doctor1} alt="" />
                            <h4>Name : Jhon Horin</h4>
                            <p>Designation : MBBS</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="single-doctor">
                            <img src={doctor2} alt="" />
                            <h4>Name : Jhon Tiger</h4>
                            <p>Designation : MBBS</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="single-doctor">
                            <img src={doctor3} alt="" />
                            <h4>Name : Jhon Lion</h4>
                            <p>Designation : FCPS</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="single-doctor">
                            <img src={doctor4} alt="" />
                            <h4>Name : Jhon Bear</h4>
                            <p>Designation : FRCS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurDoctor;