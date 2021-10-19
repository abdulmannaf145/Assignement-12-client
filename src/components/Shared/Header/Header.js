import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png'
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/home">
                        <img style={{ height: '35px' }} src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Sign Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/test">Test</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">{user.displayName}</Link>
                            </li>
                            {user?.email &&
                                <li className="nav-item">
                                    <button className="btn btn-primary" onClick={logOut}>Logout</button>
                                </li>}
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <Link to="/home">
                                <button className="btn btn-primary">Search</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;