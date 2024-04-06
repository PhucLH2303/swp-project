import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from './ListOf_Completed_Construction_project'; // Đảm bảo đường dẫn đúng

const Construction_project_Detail = () => {
    const { id } = useParams();
    const post = data.find(post => post.id === id);

    return (
        <div className="blog-detail-container">
            <h1 className="blog-detail-title">{post.title}</h1>
            <img className="blog-detail-img" src={post.image} alt={post.title} />
            <p className="blog-detail-excerpt">{post.excerpt}</p>
            <p className="blog-detail-date">{post.date}</p>
        </div>
    );
};

export default Construction_project_Detail;
