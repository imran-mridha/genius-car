import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";
import {Link} from 'react-router-dom'

const ServiceCard = ({ service }) => {
  const {_id, img, price, title } = service;
  return (
    <div className='p-5 border rounded-lg'>
      <div className="service-img">
        <img className='h-52 w-full rounded-lg' src={img} alt="" />
      </div>
      <div className='service-title mt-3'>
        <p>{title}</p>
      </div>
      <div className='flex justify-between items-center text-theme-default font-semibold mt-3'>
        <div className="price">
          <p className=''>Price: ${price}</p>
        </div>
        <div className='details-btn'>
          <Link to={`/service/${_id}`}>
            <HiArrowNarrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;