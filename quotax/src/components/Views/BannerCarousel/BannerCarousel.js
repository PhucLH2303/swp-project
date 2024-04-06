import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  height: '360px',
  wight: '100px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const BannerCarousel = () => (
  <Carousel autoplay>
      <div>
      <img src="/images/banner6.png" alt="Image 1" style={{ width: '100%', height: '360px', objectFit: 'cover' }} />
    </div>
    <div>
      <img src="/images/banner7.png" alt="Image 2" style={{ width: '100%', height: '360px', objectFit: 'cover' }} />
    </div>
    <div>
      <img src="/images/banner8.png" alt="Image 3" style={{ width: '100%', height: '360px', objectFit: 'cover' }} />
    </div>
    <div>
      <img src="/images/banner4.jpg" alt="Image 4" style={{ width: '100%', height: '360px', objectFit: 'cover' }} />
    </div>
  </Carousel>
);
export default BannerCarousel;