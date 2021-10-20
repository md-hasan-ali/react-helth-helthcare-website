import React from 'react';
import contactImg from '../../images/contact-right.jpg'
import './contact.css'

const ContactUs = () => {
    return (
        <div className='contact-area'>
            <div className="container">
                <h2 className='text-center title'>Contact Us</h2>
                <div className="row pt-5">
                    <div className="col-md-6">
                        <label htmlFor="name">Name : </label>
                        <input placeholder='Your Name' type="text" name="Name" id="" />

                        <label htmlFor="email">Email : </label>
                        <input placeholder='Your Email' type="email" name="email" id="" />

                        <label htmlFor="password">Password : </label>
                        <input placeholder='Password' type="password" name="password" id="" />
                        <textarea placeholder='Write your message' name="" id="" cols="30" rows="7"></textarea>

                        <button className='btn btn-success'>Send Message</button>

                    </div>
                    <div className="col-md-6">
                        <div className="contact-img">
                            <img src={contactImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;