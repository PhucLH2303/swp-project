// ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Import stylesheet

const ScrollToTopButton = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    const checkScrollTop = () => {
        if (window.pageYOffset > 100) {
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, []);

    return (
        <div className={`scroll-to-top ${showScrollButton ? 'visible' : ''}`} onClick={scrollToTop}>
            ^
        </div>
    );
};

export default ScrollToTopButton;
