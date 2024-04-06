// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/staff/contract-process">Contract Process</Link>
            <Link to="/staff/feedback">Feedback</Link>
            <Link to="/staff/create-post">Create Post</Link>
            <Link to="/staff/manage-posts">Manage Posts</Link>
        </div>
    );
};

export default Sidebar;
