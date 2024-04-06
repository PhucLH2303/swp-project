// src/components/PostList.js
import React from 'react';
import Post from './Post';  // Tạo một component Post để hiển thị mỗi bài viết

const PostList = () => {
    // Giả sử posts là một mảng chứa dữ liệu về các bài viết
    const posts = [
        {
            id: 1,
            title: 'Giới thiệu',
            content: 'CÔNG TY THIẾT KẾ VÀ XÂY DỰNG AN CƯ - KINH NGHIỆM XÂY DỰNG GẦN 20 NĂM UY TÍN TRONG NGÀNH Công ty Xây Dựng An Cư được thành lập từ 2009, là một trong những công ty xây dựng thuộc top đầu trong các hạng mục xây dựng với kim chỉ nam luôn trách nhiệm và hết mình trong từng dự án thực hiện, đem lại giá trị cao nhất cho người sử dụng tại TPHCM và các tỉnh thành lân cận trên khắp cả nước. Chúng tôi là những người mở đầu cho những phong cách thiết kế mới nhưng vẫn giữ nguyên các giá trị, đảm bảo tính sử dụng cao trên giá thành. Từ đó tạo nên những ngôi nhà hiện đại tiện nghi giá thành tốt cho tất cả người dân trên đất nước Việt Nam. Hiện nay, khi đã trải qua 14 năm hoạt động với nhiều giai đoạn từ thiết kế, đổi mới đến sáng tạo liên tục thì cho đến nay công ty chúng tôi đã thiết kế xây dựng và thi công hơn 200 dự án mỗi năm. Bên cạnh đó, Cty thiết kế xây dựng An Cư chúng tôi có đội ngũ quản lý với nhiều năm kinh nghiệm, các kiến trúc sư với khả năng sáng tạo cao, cùng với đội ngũ kỹ sư giám sát và thi công dày dặn kinh nghiệm. Tất cả sẽ đồng hành cùng bạn để kiến tạo nên không gian sống và làm việc hoàn hảo nhất. Các lĩnh vực hoạt động chính của công ty Xây Dựng An Cư: - Thiết kế và thi công xây dựng nhà phố, biệt thự - Thiết kế và thi công nhà xưởng - Thiết kế và thi công xây nhà trọn gói - Tư vấn thiết kế thi công xây dựng - Giám sát thi công xây dựng'
            , fontSize: '1.2em',
        },

        // Thêm các bài viết khác nếu cần
    ];

    return (
        <div className="post-list">
            {posts.map(post => (
                <Post key={post.id} title={post.title} content={post.content} fontSize={post.fontSize} />
            ))}
        </div>
    );
};

export default PostList;
