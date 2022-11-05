import React from 'react';
import team from '../../../assets/icons/team.svg';
import time from '../../../assets/icons/time.svg';
import person from '../../../assets/icons/person.svg';
import Wrench from '../../../assets/icons/Wrench.svg';
import check from '../../../assets/icons/check.svg';
import deliveryt from '../../../assets/icons/deliveryt.svg';

const Features = () => {
  return (
    <div className="features-content container mx-auto my-20">
      <div className="section-title text-center">
        <p className="text-xl font-bold text-theme-default">Core Features</p>
        <h2 className='text-theme-dark text-5xl font-bold my-5'>Why Choose Us</h2>
        <p className='w-6/12 mx-auto text-theme-text'>
          the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-10'>
        <div className='border flex flex-col items-center py-8 rounded-rounded-10'>
          <img className='mb-2' src={team} alt="" />
          <p className='font-bold'>Expert Team</p>
        </div>
        <div className='border flex flex-col items-center py-8 rounded-rounded-10 text-white bg-theme-default'>
          <img className='mb-2' src={time} alt="" />
          <p className='font-bold'>Expert Team</p>
        </div>
        <div className='border flex flex-col items-center py-8 rounded-rounded-10'>
          <img className='mb-2' src={person} alt="" />
          <p className='font-bold'>Expert Team</p>
        </div>
        <div className='border flex flex-col items-center py-8 rounded-rounded-10'>
          <img className='mb-2' src={Wrench} alt="" />
          <p className='font-bold'>Expert Team</p>
        </div>
        <div className='border flex flex-col items-center py-8 rounded-rounded-10'>
          <img className='mb-2' src={check} alt="" />
          <p className='font-bold'>Expert Team</p>
        </div>
        <div className='border flex flex-col items-center py-8 rounded-rounded-10'>
          <img className='mb-2' src={deliveryt} alt="" />
          <p className='font-bold'>Expert Team</p>
        </div>
      </div>
    </div>
  );
};

export default Features;