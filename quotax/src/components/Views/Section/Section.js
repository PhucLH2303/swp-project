import React from 'react';
import './Section.css'; // Import CSS file

const ProfessionalSection = () => {
  return (
    <section className="section_professional">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-4 col-md-4 col-12">
            <div className="single-box-item">
              <div className="icon">
                <img
                  src="https://dv02.mediawz.com/wp-content/uploads/2023/05/home-version-three-revenue-traffiic-icon1.png"
                  className="lazy"
                  alt=" "
                  data-was-processed="true"
                  style={{}}
                />
              </div>
              <h3>SÁNG TẠO VÀ TRÁCH NHIỆM</h3>
              <p>Đây chính là Slogan của công ty. Sáng tạo trong sản phẩm và trách nhiệm đối với khách hàng của mình.</p>
              <a href="" title="Xem thêm" className="pro-more">Xem thêm</a>
            </div>
          </div>

          <div className="col-lg-4 col-sm-4 col-md-4 col-12">
            <div className="single-box-item">
              <div className="icon">
                <img
                  src="https://dv02.mediawz.com/wp-content/uploads/2023/05/home-version-three-revenue-traffiic-icon2.png"
                  className="lazy"
                  alt=" "
                  data-was-processed="true"
                  style={{}}
                />
              </div>
              <h3>BẢO MẬT THÔNG TIN</h3>
              <p>Điều kiện tiên quyết để chúng tôi hoạt động và nhận được sự tín nhiệm là bảo mật thông tin khách hàng.</p>
              <a href="" title="Xem thêm" className="pro-more">Xem thêm</a>
            </div>
          </div>

          <div className="col-lg-4 col-sm-4 col-md-4 col-12">
            <div className="single-box-item">
              <div className="icon">
                <img
                  src="https://dv02.mediawz.com/wp-content/uploads/2023/05/home-version-three-revenue-traffiic-icon4.png"
                  className="lazy"
                  alt=" "
                  data-was-processed="true"
                  style={{}}
                />
              </div>
              <h3>THỜI GIAN NHANH CHÓNG</h3>
              <p>Thời gian giải quyết công việc của chúng tôi luôn nhanh nhất có thể để khách hàng hài lòng.</p>
              <a href="" title="Xem thêm" className="pro-more">Xem thêm</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSection;
