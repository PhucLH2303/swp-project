import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Blog.css'; // Import stylesheet
import ReactPaginate from 'react-paginate';

const Blog = () => {
    const postsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchTotalPages, setSearchTotalPages] = useState(0);

    useEffect(() => {
        // Gọi API để lấy danh sách bài viết từ máy chủ
        axios.get('http://localhost:8080/api/blogs') // Sử dụng đường dẫn tương đối để gọi API
            .then(response => {
                if (response.data && response.data.posts) {
                    setPosts(response.data.posts);
                    setTotalPages(Math.ceil(response.data.posts.length / postsPerPage));
                }
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []);

    useEffect(() => {
        // Gọi API để tìm kiếm bài viết
        const fetchSearchResults = async () => {
            try {
                const response = await axios.post('http://localhost:8080/search-blogs', { searchTerm });
                setSearchResults(response.data);

                // Tính toán số trang cho kết quả tìm kiếm
                setSearchTotalPages(Math.ceil(response.data.length / postsPerPage));
            } catch (error) {
                console.error('Error searching posts:', error);
            }
        };

        fetchSearchResults();
    }, [searchTerm]);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected + 1); // selected bắt đầu từ 0, nên cần +1 để bắt đầu từ trang 1
    };

    return (
        <div className='blog-container'>
            <h3 className='blog-title'><strong>Bài viết mới nhất</strong></h3>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Nhập từ khóa..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

            </div>
            <ul className='blog-list'>
                {(searchTerm && searchResults.length > 0 ? searchResults : posts)
                    .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
                    .map((post) => (
                        <li className='blog-item' key={post.post_id}>
                            <div className='blog-detail'>
                                <Link to={`/BlogDetail/${post.post_id}`} style={{ textDecoration: 'none' }}>
                                    <img className={`blog-img ${searchResults.length === 1 ? 'single-result-img' : ''}`} src={post.image} alt={post.title} /> {/* Thêm class 'single-result-img' nếu chỉ có một kết quả */}
                                    <h3 className={`blog-post-title ${searchResults.length === 1 ? 'single-result-title' : ''}`}>{post.title}</h3>
                                </Link>
                            </div>
                        </li>
                    ))}
            </ul>


            <ReactPaginate
                breakLabel="..."
                nextLabel=" >"
                onPageChange={handlePageClick}
                pageCount={searchTerm ? searchTotalPages : totalPages} // Sử dụng totalPages hoặc searchTotalPages tùy thuộc vào kết quả tìm kiếm
                previousLabel="< "
                pageClassName='page-item'
                pageLinkClassName='page-link'
                previousClassName='page-item'
                previousLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
                breakClassName='page-item'
                breakLinkClassName='page-link'
                containerClassName='pagination'
                activeClassName='active'
            />
        </div>
    );
};

export default Blog;