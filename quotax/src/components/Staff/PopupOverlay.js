// PopupOverlay.js
import React, { useState, useEffect } from 'react';

const PopupOverlay = ({ onClose, onConfirm, message, showInput, initialValues }) => {
    const [inputValues, setInputValues] = useState(initialValues || {});

    useEffect(() => {
        setInputValues(initialValues || {});
    }, [initialValues]);

    const handleConfirm = () => {
        onConfirm(inputValues);
        onClose();
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <p>{message}</p>
                {showInput && (
                    <>
                        <label>Title:</label>
                        <input type="text" value={inputValues.title || ''} onChange={(e) => setInputValues({ ...inputValues, title: e.target.value })} />
                        <label>Content:</label>
                        <textarea value={inputValues.content || ''} onChange={(e) => setInputValues({ ...inputValues, content: e.target.value })} />
                        <label>Image:</label>
                        <input type="text" value={inputValues.image || ''} onChange={(e) => setInputValues({ ...inputValues, image: e.target.value })} />
                    </>
                )}
                <button onClick={handleConfirm}>Confirm</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default PopupOverlay;
