import React from 'react';

const ServiceFacility = ({serviceFacility}) => {
  const {name,details} = serviceFacility;
  return (
    <div className='bg-gray-100 p-5 rounded-lg border-t-2 border-theme-default'>
      <h2 className='text-xl'>{name}</h2>
      <p className='text-gray-500 mt-3'>{details}</p>
    </div>
  );
};

export default ServiceFacility;