// ChangePassword.js
import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChangePassword = () => {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
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
            const response = await axios.post('http://localhost:8080/api/change-password', formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`, // Gửi token trong header để xác thực
                },
            });

            toast.success(response.data.message, { autoClose: 2000 });
        } catch (error) {
            console.error('Error changing password:', error);
            toast.error('Failed to change password. Please try again.');
        }
    };

    return (
        <div>
            <h2>Change Password</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Current Password:
                    <input
                        type="password"
                        name="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    New Password:
                    <input
                        type="password"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Confirm Password:
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <button type="submit">Change Password</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ChangePassword;
