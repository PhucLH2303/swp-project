import React, { useState, useEffect } from 'react';
import './BannerCarousel.css';

const BannerCarousel = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            moveToNextImage();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentImage]);

    const moveToNextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % 8);
    };

    const moveToPrevImage = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + 8) % 8);
    };

    return (
        <div className="banner-container">
            <div className="banners" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                <img src="/images/banner1.jpg" alt="" />
                <img src="/images/banner2.jpg" alt="" />
                <img src="/images/banner3.jpg" alt="" />
                <img src="/images/banner4.jpg" alt="" />
                <img src="/images/banner5.jpg" alt="" />
                <img src="/images/banner6.png" alt="" />
                <img src="/images/banner7.png" alt="" />
                <img src="/images/banner8.png" alt="" />
            </div>

            <button className="arrow-btn-left" onClick={moveToPrevImage}>
                &lt;
            </button>

            <button className="arrow-btn-right" onClick={moveToNextImage}>
                &gt;
            </button>
        </div>
    );
};

export default BannerCarousel;
