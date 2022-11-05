import React from 'react';
import quote from '../../../../assets/icons/quote-1.png';
import { FaStar } from "react-icons/fa";

const TestmonialSlider = ({testmonialSlide}) => {
  const { img, name,review } = testmonialSlide;
  return (
    <div className='p-5 border rounded-lg'>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <div className='mr-3'>
            <img src={img} alt="" />
          </div>
          <div>
            <p className='text-xl font-bold'>{name}</p>
            <p className='text-theme-text'>Buisnessman</p>
          </div>
        </div>
        <div>
          <img src={quote} alt="" />
        </div>
      </div>
      <div className='my-5'>
        <p>
          {review}
        </p>
        <p className='flex mt-5 text-[#FF912C]'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </p>
      </div>
    </div>
  );
};

export default TestmonialSlider;