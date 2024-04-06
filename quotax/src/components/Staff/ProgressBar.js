// ProgressBar.js
import React from 'react';

const ProgressBar = ({ currentStep }) => {
    const steps = ['Đang chờ xử lý', 'Nhận ý kiến từ customer', 'Hoàn thành hợp đồng', 'Kết thúc'];

    const calculatePercentage = (step) => {
        const totalSteps = steps.length;
        const currentStepIndex = steps.indexOf(step);
        return (currentStepIndex / (totalSteps - 1)) * 100;
    };

    return (
        <div>
            <div
                style={{
                    width: '100%',
                    background: '#e0e0e0',
                    height: '10px',
                    borderRadius: '5px',
                    margin: '10px 0',
                }}
            >
                <div
                    style={{
                        width: `${calculatePercentage(currentStep)}%`,
                        background: '#166FDA',
                        height: '100%',
                        borderRadius: '5px',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
