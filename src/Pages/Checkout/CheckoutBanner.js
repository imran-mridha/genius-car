import React from 'react';
import banner from '../../assets/images/service/banner.png'

const CheckoutBanner = ({service}) => {
  return (
    <div className='relative w-full'>
      <div className='carousel-img'>
        <img src={banner} alt="" />
      </div>
      <p className='absolute top-1/2 left-20 text-4xl font-bold text-white'>{service.title}</p>
      <p className='absolute bottom-0 left-[40%]
       bg-theme-default py-2 px-5 text-white text-xl rounded-t-3xl'>Home/Checkout</p>
    </div>
  );
};

export default CheckoutBanner;