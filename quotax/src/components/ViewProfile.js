// viewProfile.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './profile.css'; // Import file CSS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ViewProfile = () => {
    const [user, setUser] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editedUser, setEditedUser] = useState({
        email: '',
        fullname: '',
        address: '',
        phone: '',
    });

    useEffect(() => {
        const storedUserData = JSON.parse(localStorage.getItem('userData'));

        if (storedUserData) {
            setUser(storedUserData);
            setEditedUser({
                email: storedUserData.email,
                fullname: storedUserData.fullname,
                address: storedUserData.address,
                phone: storedUserData.phone,
            });
        }
    }, []);

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = async () => {
        try {
            await axios.post('http://localhost:8080/api/update-profile', {
                userId: user.userId,
                email: editedUser.email,
                fullname: editedUser.fullname,
                address: editedUser.address,
                phone: editedUser.phone,
            });

            localStorage.setItem('userData', JSON.stringify({
                userId: user.userId,
                username: user.username,
                email: editedUser.email,
                fullname: editedUser.fullname,
                address: editedUser.address,
                phone: editedUser.phone,
            }));
            setEditMode(false);

            // Gọi lại setUser với dữ liệu mới
            setUser({
                userId: user.userId,
                username: user.username,
                email: editedUser.email,
                fullname: editedUser.fullname,
                address: editedUser.address,
                phone: editedUser.phone,
            });

            // Hiển thị Toastify khi lưu thành công
            toast.success('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile:', error);

            // Hiển thị Toastify khi có lỗi
            toast.error('Failed to update profile');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedUser({
            ...editedUser,
            [name]: value,
        });
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <div className="user-profile-container">
                            <Card>
                                <Card.Header className="card-header">
                                    <Card.Title>Profile</Card.Title>
                                </Card.Header>
                                <Card.Body className="card-body">
                                    <Form>
                                        <Form.Group controlId="formEmail">
                                            <Form.Label>Email:</Form.Label>
                                            <Form.Control type="email" name="email" value={editedUser.email} onChange={handleInputChange} />
                                        </Form.Group>
                                        <Form.Group controlId="formFullname">
                                            <Form.Label>Full Name:</Form.Label>
                                            <Form.Control type="text" name="fullname" value={editedUser.fullname} onChange={handleInputChange} />
                                        </Form.Group>
                                        <Form.Group controlId="formAddress">
                                            <Form.Label>Address:</Form.Label>
                                            <Form.Control type="text" name="address" value={editedUser.address} onChange={handleInputChange} />
                                        </Form.Group>
                                        <Form.Group controlId="formPhone">
                                            <Form.Label>Phone:</Form.Label>
                                            <Form.Control type="text" name="phone" value={editedUser.phone} onChange={handleInputChange} />
                                        </Form.Group>
                                    </Form>
                                    <Button variant="primary" onClick={handleSaveClick}>
                                        Save
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>

            <ToastContainer />
        </>
    );
};
export default ViewProfile;
