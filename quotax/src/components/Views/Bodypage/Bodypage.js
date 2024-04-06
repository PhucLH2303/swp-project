// src/components/BodyPage.js
import React from 'react';
// import PostList from '../../Posts/Postlist';
import Calculator from '../../Utilities/Calculator/Calculator';
import Marquee from '../Marquee/Marquee';

import BannerCarousel from '../BannerCarousel/BannerCarousel';
import './BodyPage.css'
import Introduction from '../Introduction/Intro';
import WhyUsSection from '../WhyChooseUs/Why';
import Section from '../Section/Section';
import FindProjectForm from '../../Utilities/FindHouse/Find';
// import Service from '../Service/Service';

const BodyPage = () => {
    return (
        <div>
            <Marquee />
            <BannerCarousel />
            <FindProjectForm />
            {/* Block 1: Giới thiệu */}
            <Section />
            <Introduction />
            <WhyUsSection />
            {/* <Service/> */}

            <Calculator />
        </div>

    );
};

export default BodyPage;
