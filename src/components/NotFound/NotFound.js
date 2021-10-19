import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
import img from '../../images/404.png'
const NotFound = () => {
    return (
        <div className="pic">
            <img src={img} alt="" />
            <Link to="/home">
                <button className="btn btn-primary centering">Go to Home Page</button>
            </Link>
        </div>
    );
};

export default NotFound;