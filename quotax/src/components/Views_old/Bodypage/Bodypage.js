// src/components/BodyPage.js
import React from 'react';
import { useEffect } from 'react';
import PostList from '../../Posts/Postlist';
import Calculator from '../../Utilities/Calculator/Calculator';
import Marquee from '../../Utilities/Marquee/Marquee';
import CustomerReviews from '../CustomerReviews/CustomerReview';
import BannerCarousel from '../BannerCarousel/BannerCarousel';
import './BodyPage.css'
import Banner from '../Banner/Banner';

const BodyPage = () => {

    return (
        <div>
            <Banner />
            <Marquee />
            <BannerCarousel />

            {/* Block 1: Giới thiệu */}


            {/* Block 2: Chia thành 2 cột */}
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {/* Block 2a: Ảnh */}
                        <div className="img-body-page">
                            {/* Đặt ảnh của bạn ở đây */}
                            <img src="/images/hinh1.jpg" alt="Ảnh" className="img-fluid1" style={{ width: '100%' }} />
                            <img src="/images/hinh2.jpg" alt="Ảnh" className="img-fluid2" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div className="col-md-6 " style={{ fontWeight: "520" }}>
                        {/* Block 2b: Danh sách bài viết */}
                        <div className="text-end">
                            <PostList />
                        </div>

                    </div>
                </div>
            </div>
            <CustomerReviews />
            <Calculator />
        </div>

    );
};

export default BodyPage;
