import React from 'react';
import './Footer.css';

const Footer = () => {
    return (

        <footer class="footer">
            <div class="footer-section">
                <h4>Về chúng tôi</h4>
                <ul>
                    <li><a href="/our-story">Câu chuyện của 4Rent</a></li>
                    <li><a href="/contact1">Liên Hệ</a></li>
                    <li><a href="/privacy-policy">Chính sách &amp; Bảo mật</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Chúng tôi cung cấp</h4>
                <ul>
                    <li><a href="#sponsorship">Thông tin thị trường</a></li>
                    <li><a href="#last-minute-flights">Báo giá xây dựng</a></li>
                    <li><a href="#best-deals">Thiết kế</a></li>

                </ul>
            </div>
            <div class="footer-section">
                <h4>Blog du lịch</h4><ul><li><a href="#bali">Báo giá thị trường</a></li>
                    <li><a href="#sri">Nhà ở</a></li>
                    <li><a href="#peru">Nhà cấp 4</a></li></ul></div>
            <div class="footer-section">
                <h4>Dịch vụ</h4>
                <ul>
                    <li><a href="#report-error">Báo lỗi</a></li><li><a href="#ask-online">Hỏi trực tuyến</a></li>
                    <li><a href="#insurance">Bảo hiểm du lịch</a></li>
                </ul>
            </div>

            <div class="footer-bottom">
                <p>© Bản quyền QuotaX</p>
                <p>QuotaX@gmail.com</p>
                <p>QuotaX: Báo giá thi công nhà dân dụng!</p>
                <p>NVHSV, Thủ Đức, TP.HCM</p>
                <p>+84 12 3456 789</p>
            </div>
        </footer>
    );
};

export default Footer;
