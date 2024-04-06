import React, { useState } from 'react';
import axios from 'axios';
import './AddBlog.css'; // Import stylesheet
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBlog = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        imageUrl: '',  // Thay thế 'image' bằng 'imageUrl'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/blogs', formData);

            console.log('API Response:', response.data);

            // Clear form data after successful submission
            setFormData({
                title: '',
                content: '',
                imageUrl: '',
            });
            toast.success('Blog posted successfully!');
        } catch (error) {
            console.error('Error posting blog:', error);
            toast.error('Failed to post blog.');
        }
    };

    return (
        <div className="add-blog-container">
            <h2 className="add-blog-title">Thêm bài viết mới</h2>
            <form onSubmit={handleSubmit} className="add-blog-form" encType="multipart/form-data">
                <div className="form-group">
                    <label className="form-label"></label>
                    <input placeholder='Tiêu đề' type="text" name="title" required value={formData.title} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label className="form-label"></label>
                    <textarea placeholder='Nội dung bài viết' name="content" required value={formData.content} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label>
                        Nhập link ảnh:
                        <input required type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="form-control" />
                    </label>
                </div>

                <button type="submit" className="submit-btn">Thêm bài viết</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddBlog;