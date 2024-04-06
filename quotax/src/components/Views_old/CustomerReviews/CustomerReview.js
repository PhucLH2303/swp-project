import React, { useEffect, useRef } from 'react';
import './CustomerReview.css';

const CustomerReviews = () => {
    const videoViewRef = useRef(null);

    useEffect(() => {
        const resizeVideos = () => {
            const winw = videoViewRef.current.offsetWidth;
            const hgv = (winw / 16) * 9;

            const imgVideos = document.querySelectorAll('.img_video');
            imgVideos.forEach((img) => {
                const wImg = img.offsetWidth;
                const hgImg = (wImg / 16) * 9;
                img.style.height = `${hgImg}px`;
            });

            if (window.innerWidth > 1023) {
                document.querySelector('.list_video_index').style.height = `${hgv}px`;
            }
        };

        resizeVideos();

        window.addEventListener('resize', resizeVideos);

        return () => {
            window.removeEventListener('resize', resizeVideos);
        };
    }, []);

    return (
        <div className="container-cmrw">
            <div className="category-widget">
                <h2 className="title"><a href="#">KHÁCH HÀNG ĐÁNH GIÁ</a></h2>
            </div>
            <div className="line-title">
                <span className="line-title-sub"></span>
                <span className="line-title-text">Ý kiến đánh giá khách hàng về dịch vụ của QuotaX</span>
                <span className="line-title-sub"></span>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="video_view video_view_index" ref={videoViewRef}>
                        {/* Replace video content with image */}
                        <img src="/images/review.png" alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="list_video list_video_index" style={{ height: '339.1px' }}>
                        <ul>
                            <li className="video-item">
                                <span className="img_video" style={{ height: '32.0625px' }}>
                                    <img src="/images/rv1.png" alt="" />
                                </span>
                                <p className="video-description">Anh Sĩ ở Tân Phú nhận xét về quá trình thi công xây dựng nhà của QuotaX Group.</p>
                            </li>
                            <li className="video-item">
                                <span className="img_video" style={{ height: '32.0625px' }}>
                                    <img src="/images/rv2.png" alt="" />
                                </span>
                                <p className="video-description">Chị Nhi ở Quận 10 nhận xét về quá trình thi công xây dựng nhà của QuotaX Group.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CustomerReviews;