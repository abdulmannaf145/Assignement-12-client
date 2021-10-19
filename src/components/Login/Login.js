import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from "react-router";
import useAuth from '../hooks/useAuth';

const Login = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/'

    const auth = getAuth();

    // genarel login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleNewRegistration = e => {
        createUserWithEmailAndPassword(auth, email, password).then((result) => {
            history.push(redirect_url);
        });
        e.preventDefault();
    }
    return (
        <div className="container">
            <form onSubmit={handleNewRegistration} className="my-5 p-4 rounded shadow mx-auto" style={{maxWidth : "25rem"}}>
          <div className="mb-3 text-start">
          <h2 className="text-center pb-2">Please Sign Up</h2>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email" onBlur={handleEmailChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"  required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password" onBlur={handlePasswordChange}
              className="form-control"
              id="exampleInputPassword1" required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <p>Already have an account <Link to="/register">Sign in</Link></p>
          <button onClick={googleSignIn} className="btn btn-primary">Google Sign In</button>
        </form>
        </div>
    );
};

export default Login;