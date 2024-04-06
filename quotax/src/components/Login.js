import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import { useForm } from 'antd/es/form/Form';
import { useAuth } from './AuthContext';
const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth(); // Access the login function from the context

    const onFinish = async (values) => {
        try {
            const response = await axios.post('http://localhost:8080/api/login', values);
            const { token, user } = response.data;
            const userId = parseInt(user.id, 10);

            localStorage.setItem('userData', JSON.stringify({
                userId,
                username: user.username,
                fullname: user.fullname,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role,
            }));
            localStorage.setItem('token', token);
            login(user);
            console.log(user.role);
            toast.success(`Welcome back, ${user.username}!`, { autoClose: 2000 });
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (error) {
            console.error('Error logging in:', error);
            toast.error('Invalid username or password. Please try again.');
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [form] = useForm();

    return (
        <div className="auth-container" style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login Page</h2>
            <div className="auth-form">

                <Form
                    form={form}
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                <p>
                    Don't have an account? <Link to="/register">Register here</Link>.
                </p>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;
