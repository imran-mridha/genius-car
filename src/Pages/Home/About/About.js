import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className="hero container mx-auto my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className='relative w-1/2'>
          <img src={person} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
          <img src={parts} alt="" className="absolute right-10 top-1/2 w-3/5 border-8 border-white rounded-lg shadow-2xl" />
        </div>
        <div className='w-1/2'>
          <p className="text-xl font-bold text-theme-default">About Us</p>
          <h1 className="my-5 text-5xl font-bold text-theme-dark">
            We are qualified <br />
            & of experience <br />
            in this field</h1>
          <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <p className="pb-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <Link
            to="/"
            class="font-semibold transition-colors duration-200 text-white text-lg border border-theme-default bg-theme-default rounded-md py-3 px-6"
            aria-label="Discover More"
            title="Discover More"
          >
            Get More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;