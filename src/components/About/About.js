import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'
import img from '../../images/fea-1.png'
import img1 from '../../images/team1.png'
import img2 from '../../images/team2.png'
import img3 from '../../images/team3.png'
import img4 from '../../images/team4.png'

const About = () => {
    return (
        <>
            <div className="backgroundImg">
                <h1>About Us</h1>
                <ul className="d-flex justify-content-center fs-3 list-unstyled">
                    <li><Link className="text-decoration-none" to="/home">Home</Link></li>
                    <li>/About</li>
                </ul>
            </div>
            <div className="container py-4">
                <div className="row row-cols-lg-2 row-cols-md-1 row-cols-1">
                    <div className="col">
                        <img src={img} className="img-fluid" alt="" />
                    </div>
                    <div className="col text-start">
                        <h1 className="fs-1">Quality Helthcare Starts With Quality Doctors</h1>
                        <p>As any doctor can tell you, the most crucial step toward healing is having the ridiagnosis. If the disease is precisely identified, a good resolution is far more likely. Conversely, a bad diagnosis usually means a bad outcome, no matter how skilled the physician.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className="btn btn-primary">Contact Now</button>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-4">
                    <div className="col">
                        <div className="card h-100" style={{ background: '#000a6d', color: 'white' }}>
                            <div className="card-body">
                                <p><i className="fas fa-stethoscope fs-1"></i></p>
                                <h2 className="card-title">240</h2>
                                <h3>Quality Doctors</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" style={{ background: '#000a6d', color: 'white' }}>
                            <div className="card-body">
                                <p><i className="fas fa-user-injured fs-1"></i></p>
                                <h2 className="card-title">1450</h2>
                                <h3>Our Patients</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" style={{ background: '#000a6d', color: 'white' }}>
                            <div className="card-body">
                                <p><i className="fas fa-file-alt fs-1"></i></p>
                                <h2 className="card-title">1.1M</h2>
                                <h3>Medical Filled</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" style={{ background: '#000a6d', color: 'white' }}>
                            <div className="card-body">
                                <p><i className="far fa-smile fs-1"></i></p>
                                <h2 className="card-title">2.3M</h2>
                                <h3>Happy Patient</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h1 className="fs-1">Our High Qualified Doctors</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. gravida.</p>
                <div className="row mt-3 row-cols-1 row-cols-md-2 row-cols-lg-4 my-3 g-4">
                    <div className="col">
                        <div className="card h-100 border-0">
                            <img src={img1} className="card-img-top img-fluid" alt="img" />
                            <div className="card-body border-2 border">
                                <h5 className="card-title">Dr. Brain Adam</h5>
                                <h5>Restorative Dentist</h5>
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0">
                            <img src={img2} className="card-img-top img-fluid" alt="img" />
                            <div className="card-body border-2 border">
                                <h5 className="card-title">Dr. Brain Adam</h5>
                                <h5>Restorative Dentist</h5>
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0">
                            <img src={img3} className="card-img-top img-fluid" alt="img" />
                            <div className="card-body border-2 border">
                                <h5 className="card-title">Dr. Brain Adam</h5>
                                <h5>Restorative Dentist</h5>
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0">
                            <img src={img4} className="card-img-top img-fluid" alt="img" />
                            <div className="card-body border-2 border">
                                <h5 className="card-title">Dr. Brain Adam</h5>
                                <h5>Restorative Dentist</h5>
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;