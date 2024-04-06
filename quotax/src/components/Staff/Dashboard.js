// Dashboard.js
import React from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ContractProcess from './ContractProcess';
import Feedback from './Feedback';
import AddBlog from '../Authentication/AddBlog/AddBlog';
import ManagePosts from './ManagePosts';
import Sidebar from './Sidebar';
import './styles.css';
const Dashboard = () => {

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="content">
                <Routes>
                    <Route path="contract-process" element={<ContractProcess />} />
                    <Route path="feedback" element={<Feedback />} />
                    <Route path="create-post" element={<AddBlog />} />
                    <Route path="manage-posts" element={<ManagePosts />} />
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;
