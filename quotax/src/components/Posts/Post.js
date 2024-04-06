// src/components/Post.js
import React from 'react';
import './Post.css'
const Post = ({ title, content }) => {
    return (
        <div className="post">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default Post;
