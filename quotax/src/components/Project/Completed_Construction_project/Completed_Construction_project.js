
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Completed_Construction_project.css'; // Import stylesheet
import { data } from './ListOf_Completed_Construction_project';

const Completed_Construction_project = () => {
    const postsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(data.length / postsPerPage);

    const handlePrevClick = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextClick = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handleClick = (page) => {
        setCurrentPage(page);
    };


    return (
        <div className='blog-container'>
            <h3 className='title'>Bài viết liên quan</h3>
            <ul className='ul-blog'>
                {currentPosts.map((post) => (
                    <li className='li-post' key={post.id}>
                        <p className="blog-date">{post.date}</p>
                        <img className='blog-img' src={post.image} alt={post.title} />
                        <div>
                            <Link to={`/Construction_project_Detail/${post.id}`}>
                                <h3 className="blog-title">{post.title}</h3>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="pagination">
                <button onClick={handlePrevClick}>&lt;</button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index + 1} onClick={() => handleClick(index + 1)}>
                        {index + 1}
                    </button>
                ))}
                <button onClick={handleNextClick}>&gt;</button>

            </div>
        </div>
    );
};

export default Completed_Construction_project;









