import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_5pgaoaj', 'template_dnk06fs', form.current, {
                publicKey: 'hp56uJ49dwZhJqbQd',
            })
            .then(
                () => {
                    toast.success('Cảm ơn bạn đã đóng góp!');
                    form.current.reset(); // Reset form
                },
                (error) => {
                    toast.error('FAILED...', error.text);
                },
            );
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default form submission
            sendEmail(e);
        }
    };

    return (
        <div className="container-contact100">
            <div className="wrap-contact100">
                <form ref={form} className="contact100-form validate-form" onSubmit={sendEmail}>
                    <span className="contact100-form-title">
                        <strong>Đánh giá của bạn</strong>
                    </span>
                    <div className="wrap-input100 validate-input" data-validate="Please enter your name">
                        <input required className="input100" type="text" name="user_name" placeholder="Họ và tên" onKeyPress={handleKeyPress} />
                        <span className="focus-input100"></span>
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Please enter your email: e@a.x">
                        <input required className="input100" type="email" name="user_email" placeholder="E-mail" onKeyPress={handleKeyPress} />
                        <span className="focus-input100"></span>
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Please enter your phone">
                        <input required className="input100" type="text" name="user_phone" placeholder="Số điện thoại" onKeyPress={handleKeyPress} />
                        <span className="focus-input100"></span>
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Please enter your message">
                        <textarea required className="input100" name="message" placeholder="Lời nhắn" onKeyPress={handleKeyPress}></textarea>
                        <span className="focus-input100"></span>
                    </div>
                    <div className="container-contact100-form-btn">
                        <button type="submit" className="contact100-form-btn">
                            <span>
                                <i className="fa fa-paper-plane-o m-r-6" aria-hidden="true"></i>
                                Send
                            </span>
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;