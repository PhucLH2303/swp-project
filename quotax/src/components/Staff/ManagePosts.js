// ManagePosts.js
import React, { useState, useEffect } from 'react';
import PopupOverlay from './PopupOverlay';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ManagePosts = () => {
    const [posts, setPosts] = useState([]);
    const [showEditOverlay, setShowEditOverlay] = useState(false);
    const [showDeleteOverlay, setShowDeleteOverlay] = useState(false);
    const [selectedPostId, setSelectedPostId] = useState(null);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/blogs')
            .then((response) => response.json())
            .then((data) => setPosts(data.posts))
            .catch((error) => console.error('Error fetching posts:', error));
    }, []);

    const handleEdit = (postId, newData) => {
        // Thực hiện logic cập nhật bài viết (sử dụng API call)
        fetch(`http://localhost:8080/api/blogs/${postId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        })
            .then((response) => response.json())
            .then((data) => {
                toast.success(`Updated post with ID ${postId}`);
                console.log(`Updated post with ID ${postId}`);
                // Refresh danh sách sau khi cập nhật
                fetch('http://localhost:8080/api/blogs')
                    .then((response) => response.json())
                    .then((data) => setPosts(data.posts))
                    .catch((error) => console.error('Error fetching posts:', error));
            })
            .catch((error) => console.error('Error updating post:', error));

        // Đóng overlay sau khi xử lý xong
        setShowEditOverlay(false);
    };

    const handleDelete = (postId) => {
        // Thực hiện logic xoá bài viết (sử dụng API call)
        fetch(`http://localhost:8080/api/blogs/${postId}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => {
                toast.success(`Deleted post with ID ${postId}`);
                console.log(`Deleted post with ID ${postId}`);
                // Refresh danh sách sau khi xoá
                fetch('http://localhost:8080/api/blogs')
                    .then((response) => response.json())
                    .then((data) => setPosts(data.posts))
                    .catch((error) => console.error('Error fetching posts:', error));
            })
            .catch((error) => console.error('Error deleting post:', error));

        // Đóng overlay sau khi xử lý xong
        setShowDeleteOverlay(false);
    };

    const openEditOverlay = (postId) => {
        setSelectedPostId(postId);
        const postToEdit = posts.find((post) => post.post_id === postId);
        setSelectedPost(postToEdit);
        setShowEditOverlay(true);
    };

    const openDeleteOverlay = (postId) => {
        setSelectedPostId(postId);
        setShowDeleteOverlay(true);
    };

    const closeOverlay = () => {
        setSelectedPostId(null);
        setSelectedPost(null);
        setShowEditOverlay(false);
        setShowDeleteOverlay(false);
    };

    return (
        <div>
            <h2>Manage Posts</h2>
            <ul className="post-list">
                {posts && posts.map((post) => (
                    <li key={post.post_id} className="post-item">
                        <span className="post-title">{post.title}</span>

                        <div className="post-actions">
                            <button onClick={() => openEditOverlay(post.post_id)}>Edit</button>
                            <button onClick={() => openDeleteOverlay(post.post_id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>

            {showEditOverlay && (
                <PopupOverlay
                    onClose={closeOverlay}
                    onConfirm={(newValues) => handleEdit(selectedPostId, newValues)}
                    message="Enter new values:"
                    showInput
                    initialValues={posts.find((p) => p.post_id === selectedPostId)}
                />
            )}

            {showDeleteOverlay && (
                <PopupOverlay
                    onClose={closeOverlay}
                    onConfirm={() => handleDelete(selectedPostId)}
                    message="Are you sure you want to delete this post?"
                />
            )}
            <ToastContainer />
        </div>

    );
};

export default ManagePosts;
