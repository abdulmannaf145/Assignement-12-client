import React from 'react';
import img from '../../images/about21.png'
import icon1 from '../../images/alist1.png'
import icon2 from '../../images/alist2.png'
import icon3 from '../../images/alist3.png'
const WhyChooseUs = () => {
    return (
        <div className="container py-3">
            <div className="row row-cols-lg-2 row-cols-md-1 row-cols-1 ">
                <div className="col text-start">
                    <h1>Why Choose Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Rcommodo viverra maecenas accumsan lacus vel facilisis.</p>
                    <div className="row align-items-center jusfity-content-center shadow rounded py-2">
                        <div className="col-2"><img src={icon1} alt="" /></div>
                        <div className="col-10">
                            <h3>Professional Doctor</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, se eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="row align-items-center jusfity-content-center shadow rounded py-2 mt-3">
                        <div className="col-2"><img src={icon2} alt="" /></div>
                        <div className="col-10">
                            <h3>24/7 Hours Patient Support</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, se eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="row align-items-center jusfity-content-center shadow rounded py-2 my-3">
                        <div className="col-2"><img src={icon3} alt="" /></div>
                        <div className="col-10">
                            <h3>Excellients Lab Tests</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, se eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <img src={img} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;