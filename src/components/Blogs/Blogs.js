import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../images/blog1.png'
import img2 from '../../images/blog2.png'
import img3 from '../../images/blog3.png'
import pic1 from '../../images/bs1.png'
import pic2 from '../../images/bs2.png'
import pic3 from '../../images/bs3.png'
import pic4 from '../../images/bs4.png'

const Blogs = () => {
    return (
        <>
            <div className="backgroundImg">
                <h1>Blog Pages</h1>
                <ul className="d-flex justify-content-center fs-3 list-unstyled">
                    <li><Link className="text-decoration-none" to="/home">Home</Link></li>
                    <li>/Blogs</li>
                </ul>
            </div>
            <div className="container py-4">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="col text-start mb-3">
                            <p>
                                <img src={img1} className="img-fluid" alt="" />
                            </p>
                            <h1>People Who Move Due To Apply</h1>
                            <p>Lorem ipsum dolor sit am conseadipiscing elit, sed do eiusmod tempor .Lorem ipsum dolor sit amet, conse tadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravid commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmtempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className="btn btn-primary">Read More</button>
                        </div>
                        <div className="col text-start mb-3">
                            <p>
                                <img src={img2} className="img-fluid" alt="" />
                            </p>
                            <h1>Do Care About Your Life</h1>
                            <p>Lorem ipsum dolor sit am conseadipiscing elit, sed do eiusmod tempor .Lorem ipsum dolor sit amet, conse tadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravid commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmtempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className="btn btn-primary">Read More</button>
                        </div>
                        <div className="col text-start">
                            <p>
                                <img src={img3} className="img-fluid" alt="" />
                            </p>
                            <h1>Brain Damage Is Not Causedby Direct</h1>
                            <p>Lorem ipsum dolor sit am conseadipiscing elit, sed do eiusmod tempor .Lorem ipsum dolor sit amet, conse tadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravid commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmtempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                    <div className="col-lg-4 text-start">
                        <h4>Search</h4>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Search Here" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button class="btn btn-primary" type="button" id="button-addon2">Search</button>
                        </div>
                        <h4>Category</h4>
                        <ul className="list-unstyled">
                            <li className="mb-1">
                                <ul className="list-unstyled border border-2 p-2 d-flex justify-content-between">
                                    <li>Covid-19</li>
                                    <li>45</li>
                                </ul>
                            </li>
                            <li className="mb-1">
                                <ul className="list-unstyled border border-2 p-2 d-flex justify-content-between">
                                    <li>Life Style</li>
                                    <li>50</li>
                                </ul>
                            </li>
                            <li className="mb-1">
                                <ul className="list-unstyled border border-2 p-2 d-flex justify-content-between">
                                    <li>Medical</li>
                                    <li>60</li>
                                </ul>
                            </li>
                            <li className="mb-1">
                                <ul className="list-unstyled border border-2 p-2 d-flex justify-content-between">
                                    <li>Massage</li>
                                    <li>20</li>
                                </ul>
                            </li>
                            <li className="mb-1">
                                <ul className="list-unstyled border border-2 p-2 d-flex justify-content-between">
                                    <li>Massage</li>
                                    <li>20</li>
                                </ul>
                            </li>
                            <li className="mb-1">
                                <ul className="list-unstyled border border-2 p-2 d-flex justify-content-between">
                                    <li>Massage</li>
                                    <li>20</li>
                                </ul>
                            </li>
                        </ul>
                        <h4>Popular Post</h4>
                        <div className="row">
                            <div className="col-2">
                                <img src={pic1} alt="" />
                            </div>
                            <div className="col-10">
                                <h5>Seven Tips For Boosting</h5>
                                <p>1.2.2022</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <img src={pic3} alt="" />
                            </div>
                            <div className="col-10">
                                <h5>Seven Tips For Boosting</h5>
                                <p>1.2.2022</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <img src={pic4} alt="" />
                            </div>
                            <div className="col-10">
                                <h5>Seven Tips For Boosting</h5>
                                <p>1.2.2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;