import React from 'react';
import calender from '../../../assets/icons/calender.png';
import message from '../../../assets/icons/message.png';
import location from '../../../assets/icons/location.png';

const CallToAction = () => {
  return (
    <div className='container mx-auto h-64 rounded-rounded-10 my-20 bg-theme-dark flex justify-evenly'>
      <div className='flex items-center text-white'>
        <div className='mr-3'>
          <img src={calender} alt="" />
        </div>
        <div>
          <p><small>We are open monday-friday</small></p>
          <p className='text-xl'>7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className='flex items-center text-white'>
        <div className='mr-3'>
          <img src={message} alt="" />
        </div>
        <div>
          <p><small>Have a question?</small></p>
          <p className='text-xl'>+2546 251 2658</p>
        </div>
      </div>
      <div className='flex items-center text-white'>
        <div className='mr-3'>
          <img src={location} alt="" />
        </div>
        <div>
          <p><small>Need a repair? our address</small></p>
          <p className='text-xl'>Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;