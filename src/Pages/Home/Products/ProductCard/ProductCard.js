import React from 'react';
import { HiStar } from "react-icons/hi";

const ProductCard = ({ product }) => {
  const { _id, img, title, price } = product;
  return (
    <div className='p-5 border rounded-lg'>
      <div className="service-img">
        <img className='h-52 w-full rounded-lg bg-[#F3F3F3] p-4' src={img} alt="" />
      </div>
      <div className='text-center'>
        <div className='flex justify-center mt-3 text-xl text-[#FF912C]'>
          <HiStar />
          <HiStar />
          <HiStar />
          <HiStar />
          <HiStar />
        </div>
        <div className='service-title mt-3 text-lg font-bold'>
          <p>{title}</p>
        </div>
        <div className="price">
          <p className='text-theme-default font-semibold'>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;