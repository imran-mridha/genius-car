import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import {Link} from 'react-router-dom';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://genius-car-server-ashy.vercel.app/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className="services-content container mx-auto my-20">
      <div className="section-title text-center">
        <p className="text-xl font-bold text-theme-default">Service</p>
        <h2 className='text-theme-dark text-5xl font-bold my-5'>Our Service Area</h2>
        <p className='w-6/12 mx-auto text-theme-text'>
          the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className='service-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
        {
          services.map(service => <ServiceCard key={service._id} service={service} />)
        }
      </div>
      <div className='more-services text-center'>
        <Link
          to="/"
          class="font-semibold transition-colors text-theme-default duration-200  text-lg border border-theme-default bg-transparent hover:bg-theme-default hover:border-theme-default hover:text-white rounded-md py-3 px-6"
          aria-label="Discover More"
          title="Discover More"
        >
          More Services
        </Link>
      </div>
    </div>
  );
};

export default Services;