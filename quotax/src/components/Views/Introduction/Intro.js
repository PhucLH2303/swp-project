import React, { useState, useEffect } from 'react';
import './Intro.css';

function AboutSection() {
    // Định nghĩa state cho dữ liệu
    const [aboutData, setAboutData] = useState({
        title: 'Về Chúng Tôi',
        subtitle: 'Chúng tôi dẫn đầu trong lĩnh vực xây dựng',
        description: 'Chất lượng – An toàn – Hiệu quả – Chuyên nghiệp',
        content: 'QuotaX là 1 trong những đơn vị đi đầu trong lĩnh vực thiết kế & thi công trọn gói. Trải qua nhiều năm hình thành và phát triển, chúng tôi vẫn giữ nguyên một sứ mệnh duy nhất: cung cấp dịch vụ thi công trọn gói các công trình dân dụng với những chiến lược thay đổi linh hoạt trong quá trình vận hành và phát triển.',
        imageSrc: 'https://thaisoncorp.com.vn/wp-content/uploads/2022/10/636277543506817560_xay-dung.jpg',
        imageAlt: 'ND Construction'
    });

    // Thực hiện các thao tác cần thiết khi component được render
    useEffect(() => {
        // Có thể thêm các tác vụ tương tác khác ở đây nếu cần
    }, []);

    return (
        <div className="section-about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-12 block-title">
                        <div className="about-text-1">
                            {aboutData.title}
                        </div>
                        <h2>
                            {aboutData.subtitle}
                        </h2>
                        <div className="about-text-2">
                            {aboutData.description}
                        </div>
                        <div className="about-des">
                            {aboutData.content}
                        </div>
                        <div className="about-contact-us">
                            <div className="btn-box">
                                <a href="#" title="Xem thêm">Xem thêm</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 block-image">
                        <a className="thumb d-block" href="#" title={aboutData.imageAlt}>
                            <img width="500" height="436" alt={aboutData.imageAlt} src={aboutData.imageSrc} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
