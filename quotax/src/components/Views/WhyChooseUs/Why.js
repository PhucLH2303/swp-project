// WhyUsSection.js

import React from 'react';
import './Why.css'; // Import CSS file

const WhyUsSection = () => {
  return (
    <div className="section_why">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <img className="img-responsive mx-auto d-block lazy" src="https://dv02.mediawz.com/wp-content/uploads/2023/05/how_new1.webp" alt="TẠI SAO CHỌN CHÚNG TÔI" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 order-lg-last about-content">
            <h3>TẠI SAO CHỌN CHÚNG TÔI</h3>
            <p><span style={{ fontSize: '16pt' }}><strong>Lý do</strong></span></p>
            <ul className="why-list">
              <li className="why-item">Khách hàng: Hơn 15.000 khách hàng đã tin tưởng sử dụng<br />Kinh nghiệm: Hơn 19 năm hoạt động và phát triển</li>
              <li className="why-item">Nhân sự: Chuyên viên giỏi, giàu kinh nghiệm, có trách nhiệm</li>
              <li className="why-item">Chất lượng: Đặt yếu tố chất lượng và phục vụ lên hàng đầu<br />Quy trình: Thực hiện quy trình 2 bước chuẩn và nghiêm ngặt</li>
              <li className="why-item">Dịch vụ: Đa dạng, trọn gói, nhanh chóng và tận nơi</li>
              <li className="why-item">Quản lý: Sử dụng công nghệ trong quản lý tiến độ thực hiện</li>
              <li className="why-item">Hậu mãi: Hỗ trợ tư vấn nhiệt tình, kịp thời, nhanh chóng</li>
              <li className="why-item">Cam kết: Mang lại giá trị hiệu quả cho khách hàng</li>
            </ul>
            <div className="why-list-item">
              <div className="why-item-elementor">
                <div className="why-item-content">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
