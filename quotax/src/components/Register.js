import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Checkbox, Form, Input } from 'antd';
const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        fullname: '',
        email: '',
        password: '',
        address: '',
        phone: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/register', formData);
            // noti
            toast.success('Registration successful!', { autoClose: 2000 });  // Auto close sau 2 giây

            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            console.error('Error registering user:', error);
            toast.error('Registration failed. Please try again.');
        }
    };
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2>Register Page</h2>
                <form onSubmit={handleSubmit}>
                    <label className="input-field">
                        Username:
                        <input type="text" name="username" onChange={handleChange} required />
                    </label>
                    <br />
                    <label className="input-field">
                        Fullname:
                        <input type="text" name="fullname" onChange={handleChange} required />
                    </label>
                    <br />
                    <label className="input-field">
                        Email:
                        <input type="email" name="email" onChange={handleChange} required />
                    </label>
                    <br />
                    <label className="input-field">
                        Password:
                        <input type="password" name="password" onChange={handleChange} required />
                    </label>
                    <br />
                    <label className="input-field">
                        Address:
                        <input type="text" name="address" onChange={handleChange} required />
                    </label>
                    <br />
                    <label className="input-field">
                        Phone:
                        <input type="text" name="phone" onChange={handleChange} required />
                    </label>
                    <br />
                    <button type="submit" className="btn register-btn">
                        Register
                    </button>
                </form>
                <p>
                    Already have an account? <Link to="/login">Login here</Link>.
                </p>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;
