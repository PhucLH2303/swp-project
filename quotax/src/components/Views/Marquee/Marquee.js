import './Marquee.css';

const Marquee = () => {
    return (
        <div className="marquee">
            <div>
                <span>
                    CÔNG TY CỔ PHẦN {' '}
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'black', fontWeight: 'bolder' }}>
                        QUOTAX!
                    </a>{' '}
                    XIN KÍNH CHÀO QUÝ VỊ. ĐƠN GIÁ XÂY DỰNG NHÀ TRỌN GÓI TỪ: 4.850.000 Đ – 6.700.000 Đ/M2.</span>

                <span>
                    CÔNG TY CỔ PHẦN {' '}
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'black', fontWeight: 'bolder' }}>
                        QUOTAX!
                    </a>{' '}
                    XIN KÍNH CHÀO QUÝ VỊ. ĐƠN GIÁ XÂY DỰNG NHÀ TRỌN GÓI TỪ: 4.850.000 Đ – 6.700.000 Đ/M2.
                </span>
            </div>
        </div>
    );
};

export default Marquee;
