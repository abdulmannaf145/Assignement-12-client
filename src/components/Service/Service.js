import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const { title, img, pragraph, key } = service;
    return (
        <div>
            <div className="col">
                <div className="card h-100 text-start">
                    <img src={img} className="card-img-top" alt="Service pictures" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{pragraph}</p>
                    <Link to={`/service/${key}`}>
                            <button className="btn btn-primary">see more details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;