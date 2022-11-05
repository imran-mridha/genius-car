import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import  './Team.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import { Autoplay, Navigation } from "swiper";
import TeamSlider from '../TeamSlider/TeamSlider';

const Team = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch('team.json')
      .then(res => res.json())
      .then(data => setTeam(data))
  }, [])
  return (
    <div className='container mx-auto my-20'>
      <div className="section-title text-center">
        <p className="text-xl font-bold text-theme-default">Team</p>
        <h2 className='text-theme-dark text-5xl font-bold my-5'>Meet Our Team</h2>
        <p className='w-6/12 mx-auto text-theme-text'>
          the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className='mt-10'>
        <Swiper
          slidesPerView={3}
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
            team.map(teamSlide =>
              <SwiperSlide key={teamSlide._id}>
                <TeamSlider teamSlide={teamSlide} />
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>
    </div>
  );
};

export default Team;