import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png'

const Footer = () => {
    return (
        <div className="pictures">
            <div className="container pt-5">
                <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1">
                    <div className="col text-start">
                        <div className="mb-3">
                            <img src={logo} style={{ height: '25px' }} alt="logo" />
                        </div>
                        <p>Outsource your HR functions to industry-specialized experts.</p>
                        <ul className="d-flex list-unstyled">
                            <li><i className="fab fa-facebook-f me-2"></i></li>
                            <li><i className="fab  fa-instagram me-2"></i></li>
                            <li><i className="fab fab fa-linkedin-in me-2"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                        </ul>
                    </div>
                    <div className="col text-start">
                        <h4>Usefull Links</h4>
                        <ul className="list-unstyled">
                            <li className="unstyled"><Link className="text-decoration-none" to="/home">Home</Link></li>
                            <li><Link className="text-decoration-none" to="/home">About Us</Link></li>
                            <li><Link className="text-decoration-none" to="/home">Services</Link></li>
                            <li><Link to="/home" className="text-decoration-none">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col text-start">
                        <h4>Our Service</h4>
                        <ul className="list-unstyled">
                            <li>Dental Surgery</li>
                            <li>Orthopaedic</li>
                            <li>General Surgery</li>
                            <li>Neurology</li>
                            <li>Women Healthcare</li>
                        </ul>
                    </div>
                    <div className="col text-start">
                        <h4>Get In Touch</h4>
                        <ul className="list-unstyled">
                            <li><span className="me-2"><i className="fas fa-phone-alt"></i></span>+1 561-318-5142</li>
                            <li><span className="me-2"><i className="fas fa-envelope"></i></span>Support@Gmail.Com</li>
                            <li><span className="me-2"><i className="fas fa-home"></i></span>Uttara,Dhaka-1230 Bangladesh</li>
                        </ul>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Footer;