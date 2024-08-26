// fourth page
// src/Signup.js

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/page.css';
import { NavBar } from './navbar';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const tempErrors = {};
        if (!name) {
            tempErrors.name = 'Name is required';
        }
        if (!email){
             tempErrors.email = 'Email is required';
        }
        if (!password)
            { tempErrors.password = 'Password is required';
    }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        axios.post('http://localhost:3000/register', { name, email, password })
            .then(res => {
                navigate('/user-login');
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <NavBar/>
            <div className="train-container">
                <div className="bg-white p-3 rounded w-25">
                    <h2>Register</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name">
                                <strong>Name</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                autoComplete="off"
                                name="name"
                                className="form-control rounded-0"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <small className="text-danger">{errors.name}</small>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Email</strong>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                autoComplete="off"
                                name="email"
                                className="form-control rounded-0"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <small className="text-danger">{errors.email}</small>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">
                                <strong>Password</strong>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                name="password"
                                className="form-control rounded-0"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <small className="text-danger">{errors.password}</small>}
                        </div>
                        <button onClick={handleSubmit} className="btn btn-success w-100 rounded-0">
                            Register
                        </button>
                    </form>
                    <p>Already Have an Account</p>
                    <Link
                        to="/user-login"
                        className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Signup;
