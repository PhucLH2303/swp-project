// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Adjust the path accordingly

const PrivateRoute = ({ element }) => {
    // const { user } = useAuth(); // Access user information from the context

    // // Check if the user is authenticated and has the required role (Admin or Staff)
    // if (!user || (user.role !== 'Admin' && user.role !== 'Staff')) {
    //     alert('You are not authorized to access this page.');
    //     return <Navigate to="/" />;
    // }

    // If authenticated and has the required role, render the provided element (protected component)
    return element;
};

export default PrivateRoute;
