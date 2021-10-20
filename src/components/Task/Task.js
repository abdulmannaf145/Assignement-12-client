import React from 'react';
import img from '../../images/task1.png'

const Task = () => {
    return (
        <div className="container py-3">
            <h1>Easy 3 Step To Task</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="row w-50 mx-auto">
                <div className="col mb-2"> <button className="btn btn-primary ">Choose Doctors</button></div>
                <div className="col mb-2"><button className="btn btn-primary  ">Booking Doctors</button></div>
                <div className="col"><button className="btn btn-primary ">Doctors Service</button></div>
            </div>
            <div className="mt-5 row row-cols-lg-2 row-cols-md-1 row-cols-1">
                <div className="col">
                    <img src={img} className="img-fluid" alt="" />
                </div>
                <div className="col text-start">
                    <h3>Step-1</h3>
                    <h1>Book An Appointment At A Time That Suits You.</h1>
                    <p>No matter where you are or how busy your life gets, you can talk to one of our many friendly and knowledgable doctors online at a time that works with your schedule.</p>
                    <ul className="list-unstyled">
                        <li><span className="me-2"><i class="fas fa-check fs-5"></i></span>Lorem Ipsum is not simply random text</li>
                        <li><span className="me-2"><i class="fas fa-check fs-5"></i></span>If you are going to use a passage</li>
                        <li><span className="me-2"><i class="fas fa-check fs-5"></i></span>Making this the first true generator on the Internet</li>
                    </ul>
                    <button className="btn btn-primary">Booking Now</button>
                </div>
            </div>
        </div>
    );
};

export default Task;