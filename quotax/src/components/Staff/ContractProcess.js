// ContractProcess.js
import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './ContractProcess.css'; // Import CSS file

const ContractProcess = () => {

    const [contracts, setContracts] = useState([]);

    useEffect(() => {
        fetchContracts();
    }, []);

    const fetchContracts = async () => {
        try {
            const response = await axios.get('https://65d925f7c96fbb24c1bcc50d.mockapi.io/contract');
            setContracts(response.data);
        } catch (error) {
            console.error('Error fetching contracts:', error);
        }
    };
    const toggleReview = async (contractId, currentValue) => {
        try {
            const response = await axios.put(`https://65d925f7c96fbb24c1bcc50d.mockapi.io/contract/${contractId}`, {
                review: !currentValue
            });
            // Update the contract in state
            setContracts(contracts.map(contract => {
                if (contract.id === contractId) {
                    return {
                        ...contract,
                        review: response.data.review
                    };
                }
                return contract;
            }));
        } catch (error) {
            console.error('Error updating review status:', error);
        }
    };


    return (
        <div className="contract-process-container">
            <h2>Contracts</h2>
            <ul className="contract-list">
                {contracts.map(contract => (
                    <li key={contract.id} className="contract-item">
                        <span className="contract-info">Username: {contract.nameUser}</span>
                        <span className="contract-info">Content: {contract.content}</span>
                        <span className="contract-info">Process: {contract.process}</span>
                        <span className="contract-info">
                            Review:
                            <input
                                type="checkbox"
                                checked={contract.review}
                                onChange={() => toggleReview(contract.id, contract.review)}
                                className="review-checkbox"
                            />
                        </span>
                    </li>
                ))}
            </ul>
            <ToastContainer /> {/* For displaying toast notifications */}
        </div>
    );
};

export default ContractProcess;
