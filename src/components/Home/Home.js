import React from 'react';
import img from '../../images/slider-img2.png'
import Services from '../Services/Services';
import Task from '../Task/Task';
import WhyChooseUs from '../WhyChooseUS/WhyChooseUs';
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="pictures">
                <div className="container ">
                    <div className="row row-cols-lg-2 row-cols-md-1 row-cols-1">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="col text-start">
                                <h1>This Greatest <span>Wealth</span> Is Your Health</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa excepturi eos odit tempore dignissimos corporis molestiae atque provident recusandae? Beatae!</p>
                                <button className="btn btn-primary">View More</button>
                                <button className="btn btn-primary ms-2">Get A Qoute</button>
                            </div>
                        </div>
                        <div className="col">
                            <img src={img} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Services></Services>
            <Task></Task>
            <WhyChooseUs></WhyChooseUs>
        </>
    );
};

export default Home;