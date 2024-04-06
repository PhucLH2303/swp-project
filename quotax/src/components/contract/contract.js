// src/components/NewContractForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './contract.css'; // Import CSS file

function NewContractForm() {
    const [nameUser, setNameUser] = useState('');
    const [content, setContent] = useState('');

    const handleNameUserChange = (event) => {
        setNameUser(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('https://65d925f7c96fbb24c1bcc50d.mockapi.io/contract', {
                nameUser,
                content,
                review: false // Assuming review is false by default
            });

            console.log('New contract added:', response.data);
            // Reset form fields
            setNameUser('');
            setContent('');
        } catch (error) {
            console.error('Error adding new contract:', error);
        }
    };

    return (
        <div className="new-contract-form-container">
            <h2>Add New Contract</h2>
            <form onSubmit={handleSubmit} className="contract-form">
                <div className="form-group">
                    <label htmlFor="nameUser">Name:</label>
                    <input type="text" id="nameUser" value={nameUser} onChange={handleNameUserChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content:</label>
                    <textarea id="content" value={content} onChange={handleContentChange} className="form-control" />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
}

export default NewContractForm;
