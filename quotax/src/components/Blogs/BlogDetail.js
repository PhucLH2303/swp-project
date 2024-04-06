import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './BlogDetail.css'; // Import your custom CSS file

const BlogDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [otherPosts, setOtherPosts] = useState([]);

    useEffect(() => {
        // Gọi API để lấy thông tin bài viết hiện tại từ máy chủ
        axios.get(`http://localhost:8080/api/blogs/${id}`)
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.error('Error fetching post:', error);
            });

        // Gọi API để lấy danh sách các bài viết khác
        axios.get(`http://localhost:8080/api/blogs/${id}/other-blogs`)
            .then(response => {
                setOtherPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching other posts:', error);
            });
    }, [id]);

    return (
        <div className="blog-detail-container">
            <div className='blog-1'>
                <h1 className="blog-detail-title">{post.title}</h1>
                <img className="blog-detail-img" src={post.image} alt={post.title} />
                <p className="blog-detail-content">{post.content}</p>
            </div>

            <div className="blog-detail-sidebar">
                <div className='blog-2'>
                    <h2 className='other-post-title'>Other Posts</h2>
                    <ul className="other-posts-list">
                        {otherPosts.map(otherPost => (
                            <li key={otherPost.post_id}>
                                <Link to={`/BlogDetail/${otherPost.post_id}`} className="other-post-link">
                                    {otherPost.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;