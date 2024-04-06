import React from 'react';
import './Find.css';

function FindProjectForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const searchParams = new URLSearchParams();

        for (const pair of formData.entries()) {
            searchParams.append(pair[0], pair[1]);
        }

        // Thực hiện công việc của bạn với searchParams, ví dụ: chuyển hướng đến trang kết quả
        window.location.href = `?${searchParams.toString()}`;
    };

    return (
        <section className="section_find_project">
            <div className="container">
                <div className="row">
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <div className="wrap_find">
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="option_ group_1">
                                    <label>Chọn tỉnh/thành phố</label>
                                    <select name="tinh_tp" id="category1">
                                        <option value="all">Chọn tỉnh/thành phố</option>
                                        <option data-idp="5" value="ho-chi-minh">Hồ Chí Minh</option>
                                        <option data-idp="6" value="ha-noi">Hà Nội</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="option_ group_2">
                                    <label>Chọn quận/huyện</label>
                                    <select className="subcat" id="category2" name="huyen">
                                        <option value="all">Chọn quận/huyện</option>
                                        <option data-idp="5" value="quan-1">Quận 1</option>
                                        <option data-idp="5" value="quan-2">Quận 2</option>
                                        <option data-idp="5" value="quan-5">Quận 5</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="option_ group_3">
                                    <label>Chọn loại bất động sản</label>
                                    <select className="subcat" id="category3" name="loaibds">
                                        <option value="all">Loại bất động sản</option>
                                        <option data-idp="4" value="can-ho">Căn hộ</option>
                                        <option data-idp="12" value="dat-nen">Đất nền</option>
                                        <option data-idp="3" value="mat-bang">Mặt bằng</option>
                                    </select>
                                </div>
                            </div>
                            <input className="form-control" type="hidden" name="s" placeholder="Nhập địa chỉ, quận huyện, hoặc id dự án" />
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="button_search_sm">
                                    <button className="btn tdq_search" type="submit"><span><i className="fa fa-search"></i>Tìm kiếm nhanh</span></button>
                                    <input type="hidden" name="post_type" value="duan" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default FindProjectForm;