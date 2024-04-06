import React, { useState } from 'react';
import './Calculator.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const BuildingCalculatorReact = (e) => {
    const [resultData, setResultData] = useState(null);
    const [donGia, setDonGia] = useState(0);
    const [tongDienTich, setTongDienTich] = useState(0);
    const [tongChiPhi, setTongChiPhi] = useState(0);

    const [loaiNha, setLoaiNha] = useState('1');
    const [dichVuXay, setDichVuXay] = useState('XÂY NHÀ PHẦN THÔ');
    const [mucDauTu, setMucDauTu] = useState('1');
    const [matTien, setMatTien] = useState('1');

    const [chieuRong, setChieuRong] = useState('');
    const [chieuDai, setChieuDai] = useState('');
    const [soTang, setSoTang] = useState('1');
    const [ngachHem, setNgachHem] = useState('1');

    const [lung, setLung] = useState('0');
    const [tum, setTum] = useState('0');
    const [sanThuong, setSanThuong] = useState('1');
    const [banCong, setBanCong] = useState('0');

    const [mong, setMong] = useState('Móng băng');
    const [tangHam, setTangHam] = useState('Không hầm');
    const [mai, setMai] = useState('Mái tôn');
    const [sanVuon, setSanVuon] = useState('0');


    const handleSubmit = (e) => {
        e.preventDefault();

        var donGia = 0;

        let dienTichToanBo;

        const calculateArea = (chieuDai, chieuRong) => {

            return chieuDai * chieuRong;
        };
        const area = calculateArea(chieuRong, chieuDai);
        // Hàm cập nhật đơn giá dựa trên các lựa chọn của người dùng
        function capNhatDonGia(loaiNha, dichVuXay, mucDauTu, matTien, ngachHem, sanThuong, mai) {
            let donGiaMoi = donGia;

            // Xác định đơn giá dựa trên loại nhà
            switch (loaiNha) {
                case "1": // Nhà phố
                    donGiaMoi += 2000000;
                    break;
                case "2": // Biệt thự
                    donGiaMoi += 3000000;
                    break;
                case "3": // Nhà cấp bốn
                   
                    donGiaMoi += 1000000;
                    break;
                default:
                    donGiaMoi = 500000;
                    break;
            }

            // Xác định đơn giá dựa trên dịch vụ xây
            switch (dichVuXay) {
                case "XÂY NHÀ PHẦN THÔ":
                    donGiaMoi += 1000000;
                    break;
                case "XÂY NHÀ TRỌN GÓI":
                    donGiaMoi += 2000000;
                    break;
                default:
                    // Xử lý trường hợp dịch vụ không xác định hoặc không hợp lệ
                    break;
            }
            //mức đầu tư
            switch (mucDauTu) {
                case "1":
                    donGiaMoi += 300000;
                    break;
                case "2":
                    donGiaMoi += 500000;
                    break;
                case "3":
                    donGiaMoi += 900000;
                    break;
                default:
                    break;
            }


            // Xác định đơn giá dựa trên số mặt tiền
            switch (matTien) {
                case "1":
                    donGiaMoi += 200000;
                    break;
                case "2":
                    donGiaMoi += 400000;
                    break;
                default:
                    // Xử lý trường hợp số mặt tiền không xác định hoặc không hợp lệ
                    break;
            }

            // Xác định đơn giá dựa trên chiều rộng của hẻm
            switch (ngachHem) {
                case '1':
                    donGiaMoi += 200000;
                    break;
                case '2':
                    donGiaMoi += 300000;
                    break;
                case '3':
                    donGiaMoi += 400000;
                    break;
                default:
                    // Xử lý trường hợp chiều rộng hẻm không xác định hoặc không hợp lệ
                    break;
            }

            //sân thượng
            switch (sanThuong) {
                case '1':
                    donGiaMoi += 200000;
                    break;
                case '2':
                    donGiaMoi += 300000;
                    break;
                default:
                    // Xử lý trường hợp chiều rộng hẻm không xác định hoặc không hợp lệ
                    break;
            }
            //mái tôn
            switch (mai) {
                case '1':
                    donGiaMoi += 2000000;
                    break;
                case '2':
                    donGiaMoi += 3000000;
                    break;
                case '3':
                    donGiaMoi += 4000000;
                    break;
                case '4':
                    donGiaMoi += 5000000;
                    break;
                default:
                    // Xử lý trường hợp chiều rộng hẻm không xác định hoặc không hợp lệ
                    break;
            }




            return donGiaMoi;
        }


        //tầng
        // điều kiện
        if (soTang < 1 || chieuDai < 1 || chieuRong < 1) {
            toast.error('Vui lòng nhập chiều dài và chiều rộng hợp lệ');
            return
        }
        if (soTang == 1 && banCong == 1) {
            toast.error('Nhà có 1 tầng không cần ban công');
            return;
        }
        //diện tích tổng tầng
        dienTichToanBo = area * soTang;




        donGia = capNhatDonGia(loaiNha, dichVuXay, mucDauTu, matTien, ngachHem, sanThuong, mai);
        setDonGia(capNhatDonGia(loaiNha, dichVuXay, mucDauTu, matTien, ngachHem, sanThuong, mai));
        //thành tiền từng phần
        let thanhTienTang = dienTichToanBo * donGia;
        let thanhTienLung = lung * donGia;
        let thanhTienTum = tum * donGia;
        let chiPhiMong = tinhChiPhiMong(mong, area, donGia);
        let chiPhiMai = tinhChiPhiMai(mai, area, donGia);
        let chiPhiBanCong = tinhChiPhiBanCong(banCong, area, donGia, soTang);
        let chiPhiHam = tinhChiPhiHam(tangHam, area, donGia);
        let chiPhiSanVuon = tinhChiPhiSanVuon(sanVuon, donGia);
        let dienTichTum = tinhDienTichTum(sanThuong, tum);
        let dienTichMong = tinhDienTichMong(mong, area);
        let dienTichMai = tinhDienTichMai(mai, area);
        let dienTichBanCong = tinhDienTichBanCong(banCong, area, soTang);
        let dienTichHam = tinhDienTichHam(tangHam, area);
        let dienTichSanVuon = tinhDienTichSanVuon(sanVuon);
        let dienTichLung = tinhDienTichLung(lung);
        //tính diện tích
        function tinhDienTichMong(mong, area) {
            switch (mong) {
                case 'Móng băng':
                    return area * 0.5; // 50%
                case 'Móng cọc':
                    return area * 0.4; // 40%
                case 'Móng đơn':
                    return area * 0.3; // 30%
                default:
                    console.log('Loại móng không hợp lệ');
                    return 0;
            }
        }
        function tinhDienTichLung(lung) {
            return lung;
        }
        function tinhDienTichTum(sanThuong, tum) {
            switch (sanThuong) {
                case '1':
                    return tum; // Diện tích tum không thay đổi
                case '2':
                    return tum * 1.5; // Tăng 50% diện tích tum
                default:
                    return 0; // Nếu không có thông tin cụ thể về sân thượng
            }
        }
        function tinhDienTichMai(mai, area) {
            switch (mai) {
                case 'Mái tôn':
                    return area * 0.35; // 35%
                case 'Mái BTCT':
                    return area * 0.45; // 45%
                case 'Xà gồ + ngói':
                    return area * 0.7; // 70%
                case 'BTCT + ngói':
                    return area * 1; // 100%
                default:
                    console.log('Loại mái không hợp lệ');
                    return 0;
            }
        }

        function tinhDienTichBanCong(banCong, area, soTang) {
            if (banCong === '1') {
                return area * 0.03 * (soTang - 1); // Thêm số tầng vào tính toán
            }
            return 0; // Nếu không có ban công.
        }

        function tinhDienTichHam(tangHam, area) {
            let tiLePhanTram = 0;
            switch (tangHam) {
                case 'Độ sâu 1.0 - 1.5': // Độ sâu 1.0 - 1.5
                    tiLePhanTram = 1.5;
                    break;
                case 'Độ sâu 1.5 - 1.7': // Độ sâu 1.5 - 1.7
                    tiLePhanTram = 1.7;
                    break;
                case 'Độ sâu 1.7 - 2.0': // Độ sâu 1.7 - 2.0
                    tiLePhanTram = 2.0;
                    break;
                case 'Độ sâu > 2m': // Độ sâu > 2m
                    tiLePhanTram = 2.5;
                    break;
                case 'Không hầm':
                    tiLePhanTram = 0;// Không hầm
                default:
                    tiLePhanTram = 0; // không có diện tích hầm nếu lựa chọn "Không hầm"
                    break;
            }
            return area * tiLePhanTram;
        }
        function tinhDienTichSanVuon(sanVuon) {
            return sanVuon * 0.7; // Chỉ lấy 70% diện tích
        }
        //tính tổng
        let tongDienTich = parseFloat(dienTichToanBo) + parseFloat(dienTichLung) + parseFloat(dienTichTum) + parseFloat(dienTichMong) + parseFloat(dienTichMai) +
            parseFloat(dienTichBanCong) + parseFloat(dienTichHam) + parseFloat(dienTichSanVuon);
        setTongDienTich(tongDienTich);

        let tongChiPhi = thanhTienTang + thanhTienLung + thanhTienTum +
            chiPhiMong + chiPhiMai + chiPhiBanCong + chiPhiHam + chiPhiSanVuon;
        setTongChiPhi(tongChiPhi);
        //từng phần
        switch (sanThuong) {
            case '1':
                thanhTienTum = tum * donGia;
                break;
            case '2':
                thanhTienTum = (tum * (donGia + 1000000)) * 1.5;
                break;
            default:
                break;
        }

        function tinhChiPhiMong(mong, area, donGia) {
            switch (mong) {
                case 'Móng băng':
                    return area * 0.5 * donGia;
                case 'Móng cọc':
                    return area * 0.4 * donGia;
                case 'Móng đơn':
                    return area * 0.3 * donGia;
                default:
                    console.log('Loại móng không hợp lệ');
                    return 0;
            }
        }

        function tinhChiPhiMai(mai, area, donGia) {
            switch (mai) {
                case 'Mái tôn':
                    return area * 0.35 * donGia;
                case 'Mái BTCT':
                    return area * 0.45 * donGia;
                case 'Xà gồ + ngói':
                    return area * 0.7 * donGia;
                case 'BTCT + ngói':
                    return area * 1 * donGia; // 100%
                default:
                    console.log('Loại mái không hợp lệ');
                    return 0;
            }
        }
        function tinhChiPhiBanCong(banCong, area, donGia, soTang) {
            switch (banCong) {
                case '1':
                    return area * 0.03 * donGia * (soTang - 1); // Thêm số tầng vào tính toán
                default:
                    return 0; // Nếu không có ban công.
            }
        }

        function tinhChiPhiHam(tangHam, area, donGia) {
            let tiLePhanTram = 0;

            switch (tangHam) {
                case 'Độ sâu 1.0 - 1.5': // 
                    tiLePhanTram = 1.5;
                    break;
                case 'Độ sâu 1.5 - 1.7': // 
                    tiLePhanTram = 1.7;
                    break;
                case 'Độ sâu 1.7 - 2.0': // 
                    tiLePhanTram = 2.0;
                    break;
                case 'Độ sâu > 2m': // 
                    tiLePhanTram = 2.5;
                    break;
                case 'Không hầm': // 
                    tiLePhanTram = 0; // không có chi phí hầm nếu lựa chọn "Không hầm"
                default:
                    tiLePhanTram = 0;
                    break;
            }

            return area * tiLePhanTram * donGia;
        }
        function tinhChiPhiSanVuon(sanVuon, donGia) {
            return sanVuon * 0.7 * donGia; // Chỉ lấy 70% diện tích nhân với đơn giá.
        }

        setResultData({

            //loại
            loaiNha: loaiNha,
            dichVuXay: dichVuXay,
            mucDauTu: mucDauTu,
            matTien: matTien,
            chieuRong: chieuRong,
            chieuDai: chieuDai,
            ngachHem: ngachHem,
            mong: mong,
            tangHam: tangHam,
            mai: mai,
            banCong: banCong,
            sanVuon: sanVuon,
            lung: lung,
            sanThuong: sanThuong,
            soTang: soTang,
            tangHam: tangHam,
            //diện tích
            dienTichToanBo: dienTichToanBo,
            dienTichLung: dienTichLung,
            dienTichTum: dienTichTum,
            dienTichMong: dienTichMong,
            dienTichMai: dienTichMai,
            dienTichBanCong: dienTichBanCong,
            dienTichHam: dienTichHam,
            dienTichSanVuon: dienTichSanVuon,
            //chi phí
            donGia: donGia,
            tongDienTich: tongDienTich,
            tongChiPhi: tongChiPhi,
            thanhTienTang: thanhTienTang,
            thanhTienLung: thanhTienLung,
            thanhTienTum: thanhTienTum,
            chiPhiMong: chiPhiMong,
            chiPhiMai: chiPhiMai,
            chiPhiBanCong: chiPhiBanCong,
            chiPhiHam: chiPhiHam,
            chiPhiSanVuon: chiPhiSanVuon,
            tongDienTich: tongDienTich,
            tongChiPhi: tongChiPhi
        });
    }
    const handleSaveResult = async () => {
        try {
            const response = await fetch('http://localhost:3001/saveResult', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(resultData),
            });

            if (response.ok) {
                console.log('Result saved successfully');
                // Handle success, e.g., show a success message to the user
            } else {
                console.error('Error saving result:', response.statusText);
                // Handle error, e.g., show an error message to the user
            }
        } catch (error) {
            console.error('Error saving result:', error);
            // Handle error, e.g., show an error message to the user
        }
    };




    return (
        <>
            <form role="search" method="get" className="tienich" onSubmit={handleSubmit} >
                <p>
                    <strong>
                        Quý khách vui lòng nhập đầy đủ các thông tin bên dưới, trường hợp công năng không có quý khách vui lòng để trống.
                        Lưu ý quý khách nhập diện tích xây dựng (không phải diện tích đất) để có kết quả tính tương đối chính xác nhất.
                        Đơn giá phụ thuộc vào nhiều yếu tố như: diện tích xây dựng, quy mô công trình, điều kiện thi công, chủng loại vật liêu,... Kết quả tính này chỉ mang tính chất tham khảo, để được tư vấn chính xác nhất vui lòng liên hệ với hotline{' '}
                        <a href="tel:0912345678" style={{ color: 'red' }}>
                            0912345678
                        </a>{' '}
                        của công ty chúng tôi. Chân thành cảm ơn quý khách!
                    </strong>
                </p>

                <div className="thongtin_coban">
                    <h4 className="title_tg">Thông tin cơ bản</h4>
                    <div className="clearfix"></div>
                    <div className="row field">
                        <div className="col-md-3">
                            <span>Chọn loại công trình: </span>
                            <select className="form-control" id="loainha" name="loainha" value={loaiNha} onChange={(e) => setLoaiNha(e.target.value)}>
                                <option value="1">Nhà phố</option>
                                <option value="2">Biệt thự</option>
                                <option value="3">Nhà cấp bốn</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <span>Dịch vụ xây nhà: </span>
                            <select className="form-control" id="loaixay" name="loaixay" value={dichVuXay} onChange={(e) => setDichVuXay(e.target.value)}>
                                <option value="XÂY NHÀ PHẦN THÔ">Xây nhà phần thô</option>
                                <option value="XÂY NHÀ TRỌN GÓI">Xây nhà trọn gói</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <span>Mức đầu tư: </span>
                            <select className="form-control" id="mucdautu" name="mucdautu" value={mucDauTu} onChange={(e) => setMucDauTu(e.target.value)}>
                                <option value="1">Trung bình</option>
                                <option value="2">TB - Khá</option>
                                <option value="3">Khá+</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <span>Mặt tiền: </span>
                            <select className="form-control" id="mattien" name="mattien" value={matTien} onChange={(e) => setMatTien(e.target.value)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>

                    <div className="clearfix"></div>
                    <div className="margin-top-20"></div>

                    <div className="row field">
                        <div className="col-md-3">
                            <span>Chiều rộng(Ví dụ 2.5m): </span>
                            <input type="number" className="form-control" id="chieuRong" name="chieuRong" step="0.01" placeholder="Nhập chiều rộng" min="0" value={chieuRong} onChange={(e) => setChieuRong(e.target.value)} />
                        </div>
                        <div className="col-md-3">
                            <span>Chiều dài(Ví dụ 10.5m): </span>
                            <input type="number" className="form-control" id="chieuDai" name="chieuDai" step="0.01" placeholder="Nhập chiều dài" min="0" value={chieuDai} onChange={(e) => setChieuDai(e.target.value)} />
                        </div>
                        <div className="col-md-3">
                            <span>Số tầng(Trừ tum, lửng): </span>
                            <input type="number" className="form-control" id="soTang" name="soTang" step="1" placeholder="Nhập số tầng" min="0" value={soTang} onChange={(e) => setSoTang(e.target.value)} />
                        </div>
                        <div className="col-md-3">
                            <span>Hẻm: </span>
                            <select className="form-control" id="hem" name="hem" value={ngachHem} onChange={(e) => setNgachHem(e.target.value)}>
                                <option value="1">Rộng hơn 5m</option>
                                <option value="2">Rộng từ 3m - 5m</option>
                                <option value="3">Nhỏ hơn 3m</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="margin-top-20"></div>
                <div className="thongtin_chitiet">
                    <h4 className="title_tg">Thông tin công năng</h4>
                    <div className="clearfix"></div>
                    <div className="row field">
                        <div className="col-md-3 tang">
                            <span>Lửng(Ví dụ 30m2):</span>
                            <input type="number" className="form-control" id="lung" name="lung" step="0.01" placeholder="Nhập diện tích" min="0" value={lung} onChange={(e) => setLung(e.target.value)} />
                        </div>
                        <div className="col-md-3 ham">
                            <span>Tum(Tầng thượng)(Ví dụ 30m2): </span>
                            <input type="number" className="form-control" id="tum" name="tum" step="0.01" placeholder="Nhập diện tích" min="0" value={tum} onChange={(e) => setTum(e.target.value)} />
                        </div>
                        <div className="col-md-3">
                            <span>Sân thượng: </span>
                            <select className="form-control" id="sanThuong" name="sanThuong" value={sanThuong} onChange={(e) => setSanThuong(e.target.value)}>
                                <option value="1">Sân thượng</option>
                                <option value="2">Sân thượng có mái</option>
                            </select>
                        </div>
                        <div className="col-md-3 mong">
                            <span>Ban công: </span>
                            <select className="form-control" id="banCong" name="banCong" value={banCong} onChange={(e) => setBanCong(e.target.value)}>
                                <option value="0">Không có</option>
                                <option value="1">Có ban công</option>
                            </select>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="margin-top-20"></div>
                    <div className="row field">
                        <div className="col-md-3 mong">
                            <span>Móng: </span>
                            <select className="form-control" id="mong" name="mong" value={mong} onChange={(e) => setMong(e.target.value)}>
                                <option value="Móng băng">Móng băng</option>
                                <option value="Móng cọc">Móng cọc(Móng đài)</option>
                                <option value="Móng đơn">Móng đơn</option>
                            </select>
                        </div>
                        <div className="col-md-3 mong">
                            <span>Tầng hầm: </span>
                            <select className="form-control" id="tangHam" name="tangHam" value={tangHam} onChange={(e) => setTangHam(e.target.value)}>
                                <option value="Không hầm">Không hầm</option>
                                <option value="Độ sâu 1.0 - 1.5">Độ sâu 1.0 - 1.5</option>
                                <option value="Độ sâu 1.5 - 1.7">Độ sâu 1.5 - 1.7</option>
                                <option value="Độ sâu 1.7 - 2.0">Độ sâu 1.7 - 2.0</option>
                                <option value="Độ sâu > 2m">Độ sâu &gt; 2m</option>
                            </select>
                        </div>

                        <div className="col-md-3 mong">
                            <span>Mái: </span>
                            <select className="form-control" id="mai" name="mai" value={mai} onChange={(e) => setMai(e.target.value)}>
                                <option value="khong co">Không có mái</option>
                                <option value="Mái tôn">Mái tôn</option>
                                <option value="Mái BTCT">Mái BTCT</option>
                                <option value="Xà gồ + ngói">Xà gồ + ngói</option>
                                <option value="BTCT + ngói">BTCT + ngói</option>
                            </select>
                        </div>
                        <div className="col-md-3 santruoc">
                            <span>Sân vườn(Ví dụ 10m2): </span>
                            <input type="number" className="form-control" id="sanVuon" name="sanVuon" step="0.01" placeholder="Nhập diện tích" min="0" value={sanVuon} onChange={(e) => setSanVuon(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="margin-top-20"></div>
                <button type="submit" className="btn" id="tinhbtn">
                    Tính kết quả
                </button>
                <ToastContainer />
            </form >
            <div className="prectn">
                <div className="result-container" id='result-container'>
                    {resultData && (
                        <>
                            <h2>Kết quả tính toán</h2>
                            <div className="rs-head">
                                <h4>ĐƠN GIÁ XÂY NHÀ {dichVuXay}</h4>
                                <h5>Đơn giá: {(donGia / 2).toLocaleString('vi-VN')} VND</h5>
                            </div>

                            <table className="table">

                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Loại</th>
                                        <th>Diện tích</th>
                                        <th>Chi phí</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { id: 1, label: resultData.mong, dienTich: resultData.dienTichMong.toLocaleString('vi-VN'), chiPhi: resultData.chiPhiMong.toLocaleString('vi-VN') },
                                        { id: 2, label: `Tầng hầm (${resultData.tangHam})`, dienTich: resultData.dienTichHam.toLocaleString('vi-VN'), chiPhi: resultData.chiPhiHam.toLocaleString('vi-VN') },
                                        { id: 3, label: `Mái (${resultData.mai})`, dienTich: resultData.dienTichMai.toLocaleString('vi-VN'), chiPhi: resultData.chiPhiMai.toLocaleString('vi-VN') },
                                        { id: 4, label: `Số tầng (${resultData.soTang})`, dienTich: resultData.dienTichToanBo.toLocaleString('vi-VN'), chiPhi: resultData.thanhTienTang.toLocaleString('vi-VN') },
                                        { id: 5, label: 'Lửng', dienTich: resultData.dienTichLung.toLocaleString('vi-VN'), chiPhi: resultData.thanhTienLung.toLocaleString('vi-VN') },
                                        { id: 6, label: 'Tum (Tầng thượng)', dienTich: resultData.dienTichTum.toLocaleString('vi-VN'), chiPhi: resultData.thanhTienTum.toLocaleString('vi-VN') },
                                        ...(soTang > 1 ? [{ id: 7, label: `Ban công (${soTang - 1} tầng)`, dienTich: resultData.dienTichBanCong.toLocaleString('vi-VN'), chiPhi: resultData.chiPhiBanCong.toLocaleString('vi-VN') }] : []),
                                        { id: 8, label: 'Sân vườn + móng sân', dienTich: resultData.dienTichSanVuon.toLocaleString('vi-VN'), chiPhi: resultData.chiPhiSanVuon.toLocaleString('vi-VN') },
                                    ].map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.label}</td>
                                            <td>{item.dienTich} m2</td>
                                            <td>{item.chiPhi} VND</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th colSpan="2">Tổng</th>
                                        <th>Tổng diện tích: {tongDienTich} m2</th> {/* Giả sử bạn có hàm tinhTongDienTich */}
                                        <th>Tổng chi phí: {tongChiPhi.toLocaleString('vi-VN')} VND</th> {/* Giả sử bạn có hàm tinhTongChiPhi */}
                                    </tr>
                                </tfoot>


                            </table>
                            <button type="button" className="btn" id="luubtn" onClick={handleSaveResult}>
                                Lưu và nhận báo giá chi tiết
                            </button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default BuildingCalculatorReact;
