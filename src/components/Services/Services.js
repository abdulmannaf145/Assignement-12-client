import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="py-5 container">
            <h1>Special Service For <span>Patients</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. gravida.</p>
            <div className="mt-5 row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3">
                {
                    services.map(service => <Service service={service} key={service.key}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;