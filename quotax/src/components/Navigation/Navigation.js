import React from 'react';
import './Navigation.css';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import useAuth
import Banner from '../Views/Banner/Banner';
const NavigationBar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();

        localStorage.removeItem('userData');
        // Chuyển hướng đến trang /login
        navigate('/login');
    };
    const userData = JSON.parse(localStorage.getItem('userData'));
    return (
        <>


            <Navbar bg="light" expand="lg" style={{ height: '60px' }}>
                <Container>
                    <Link to="/" style={{ color: 'red', textDecoration: 'none' }}>
                        <Navbar.Brand>QuotaX</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarNav" />
                    <Navbar.Collapse id="navbarNav">
                        <Nav className="mx-auto">
                            <Link to="/" className="nav-link">Trang chủ</Link>
                            <Link to="/blog" className="nav-link">Blog</Link>
                            <NavDropdown title="Dự án" id="duanDropdown" className="justify-content-center">
                                <Link to="/du_an_thi_cong" className="dropdown-item">Dự án thi công</Link>
                                <Link to="/du_an_da_hoan_thanh" className="dropdown-item">Dự án đã hoàn thành</Link>
                            </NavDropdown>
                            <NavDropdown title="Thiết Kế" id="baogiaDropdown" className="justify-content-center">
                                <Link to="/NhaCap4" className="dropdown-item">Mẫu Nhà Cấp 4</Link>
                            </NavDropdown>
                            <NavDropdown title="Báo giá" id="baogiaDropdown" className="justify-content-center">
                                <Link to="/xay_dung_phan_tho" className="dropdown-item">Xây dựng phần thô</Link>
                                <Link to="/" className="dropdown-item">Hoàn thiện nhà xây thô</Link>
                            </NavDropdown>
                            <Link to="/contact" className="nav-link">Liên hệ</Link>
                        </Nav>
                    </Navbar.Collapse>

                    <Nav>
                        {userData ? (
                            <>
                                <NavDropdown title={`Welcome, ${userData.username}`} id="basic-nav-dropdown">
                                    <Link to="/profile" className="dropdown-item">View Profile</Link>
                                    <Link to="/quotation" className="dropdown-item">My Quotation</Link>
                                    <Link to="/change-password" className="dropdown-item" >Change Password</Link>

                                    {userData.role === 'Staff' || userData.role === 'Admin' ? (
                                        <Link to="/staff/contract-process" className="dropdown-item">Dashboard</Link>
                                    ) : null}

                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={handleLogout} style={{ color: 'red' }}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        ) : (
                            <Link to="/login">
                                <Button variant="outline-primary" className="mr-2">
                                    Login/Register
                                </Button>
                            </Link>
                        )}
                    </Nav>


                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;
