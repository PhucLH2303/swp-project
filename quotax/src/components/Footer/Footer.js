import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={6} className="footer-col">
                        <h5>Liên hệ</h5>
                        <p>Địa chỉ: Nhà Văn hóa Sinh viên TP. Hồ Chí Minh.</p>
                        <p>Email: FPT@edu.com</p>
                        <p>Điện thoại: 0123456789</p>
                    </Col>
                    <Col md={6} className="footer-col">
                        <h5>Theo dõi chúng tôi</h5>
                        <div className="social-icons">
                            <a href="/" className="icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="/" className="icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="/" className="icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="/" className="icon">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer-bottom">
                <Container>
                    <p>&copy; 2024 QuotaX. All rights reserved.</p>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
