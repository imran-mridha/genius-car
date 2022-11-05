import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const TeamSlider = ({ teamSlide }) => {
  const { img, title, fb, tw, lnk, ins } = teamSlide;
  // console.log(social);
  return (
    <div className='p-5 border rounded-lg'>
      <div className="service-img">
        <img className='h-52 w-full rounded-lg' src={img} alt="" />
      </div>
      <div className='text-center'>
        <div className='service-title mt-3 text-lg font-bold'>
          <p>{title}</p>
          <p className='text-theme-body font-normal'><small>Engine Expert</small></p>
        </div>
        <div className="social flex justify-center mt-3">
          <a className='p-2 rounded-full bg-[#395185] mr-2' href={fb}><FaFacebookF className='text-2xl text-white' /></a>
          <a className='p-2 rounded-full bg-[#55ACEE] mr-2' href={tw}><FaTwitter className='text-2xl text-white' /></a>
          <a className='p-2 rounded-full bg-[#0A66C2] mr-2' href={lnk}><FaLinkedinIn className='text-2xl text-white' /></a>
          <a className='p-2 rounded-full bg-[#B147A5]' href={ins}><FaInstagram className='text-2xl text-white' /></a>
        </div>
      </div>
    </div>
  );
};

export default TeamSlider;