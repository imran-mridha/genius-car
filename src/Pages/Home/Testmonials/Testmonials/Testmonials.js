import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import  '../../Team/Team/Team.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import { Autoplay, Navigation } from "swiper";
import TestmonialSlider from '../TestmonialSlider/TestmonialSlider';

const Testmonials = () => {
  const [testmonials, setTestmonials] = useState([]);
  useEffect(() => {
    fetch('testmonail.json')
      .then(res => res.json())
      .then(data => setTestmonials(data))
  }, [])
  return (
    <div className='container mx-auto my-20'>
      <div className="section-title text-center">
        <p className="text-xl font-bold text-theme-default">Testimonial</p>
        <h2 className='text-theme-dark text-5xl font-bold my-5'>What Customer Says</h2>
        <p className='w-6/12 mx-auto text-theme-text'>
          the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className='mt-10'>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {
            testmonials.map(testmonialSlide =>
              <SwiperSlide key={testmonialSlide._id}>
                <TestmonialSlider testmonialSlide={testmonialSlide} />
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>
    </div>
  );
};

export default Testmonials;