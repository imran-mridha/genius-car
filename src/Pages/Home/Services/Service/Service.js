import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Service = () => {
  const service = useLoaderData();
  return (
    <div className='container mx-auto my-20'>
      <p>{service.title}</p>
      <Link to={`/checkout/${service._id}`}><button className='btn mt-5'>Procced Checkout</button></Link>
    </div>
  );
};

export default Service;